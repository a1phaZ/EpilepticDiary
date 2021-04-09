import React, {Component} from "react";
import {Container} from "react-bootstrap";
import List from "../timeline/List.component";
import '../../App.css';
import ButtonsPanel from "../buttonsPanel/ButtonsPanel.component";
import {bindActionCreators} from "redux";
import {disableButton, enableButton, hideModal, showModal} from "../../store/buttonsPanel/actions";
import {connect} from "react-redux";
import {setDate, setItem, setItems} from "../../store/data/actions";
import ModalPageComponent from "../modalPage/ModalPage.component";
import {get, initializeDB} from "../../_functions/db";
import {format, subDays} from 'date-fns';
import {sortData} from "../../_functions/handlersData";
import {setDrugs} from "../../store/settings/actions";
import DatePicker from "../datePicker/DatePicker.component";

const ITEMS = 'items';
const SETTINGS = 'settings';
const READWRITE = 'readwrite';

class HomeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			db: null,
			_currentDate: new Intl.DateTimeFormat('ru-RU', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			}).format(new Date(this.props.currentDate)),
			today: format(new Date(), 'yyyy-MM-dd'),
			sleepId: -1,
		}
		this.handlerShowModal = this.handlerShowModal.bind(this);
		this.handleModalFilter = this.handleModalFilter.bind(this);
		this.initDB = this.initDB.bind(this);
		this.getItems = this.getItems.bind(this);
		this.addItem = this.addItem.bind(this);
		this.setSleepId = this.setSleepId.bind(this);
		this.setDateFromDatepicker = this.setDateFromDatepicker.bind(this);
	}
	
	initDB = async () => {
		const db = await initializeDB();
		
		this.setState({db: db});
		
		await this.getItems();
	}
	
	getItems = async () => {
		const {db} = this.state;
		const idxVal = format(new Date(this.props.currentDate), 'yyyy-MM-dd');
		let items = await get(db, ITEMS, 'date', idxVal);
		let subDaysItem = sortData(await get(db, ITEMS, 'date', format(subDays(new Date(this.props.currentDate), 1), 'yyyy-MM-dd')));
		
		if (subDaysItem[0]?.type.toLowerCase() === 'сон') {
			items.push(subDaysItem[0]);
		}
		
		const idx = items.findIndex((item) => {
			if (item.subType) {
				return item?.subType.toLowerCase() === 'начало'
			}
			return false;
		});
		if (idx !== -1) {
			this.setSleepId(items[idx]._id);
		}
		
		if (items.length) {
			this.props.setItems(items);
		} else {
			this.props.setItems([]);
		}
		
		let drugs = await get(db, SETTINGS, 'type', 'drug');
		if (drugs.length) {
			this.props.setDrugs(drugs);
		}
	}
	
	addItem = async (item) => {
		const {db} = this.state;
		let tx = db.transaction(ITEMS, READWRITE);
		let itemsStore = tx.objectStore(ITEMS);
		try {
			await itemsStore.add(item);
		} catch (e) {
			throw e;
		}
	}
	
	setDateFromDatepicker = (date) => {
		this.props.setDate(date);
	}
	
	componentDidMount() {
		this.initDB();
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.currentDate !== this.props.currentDate) {
			this.getItems();
		}
	}
	
	handlerShowModal = () => {
		this.props.showModal();
	}
	
	setSleepId = (id) => {
		this.setState({sleepId: id});
	}
	
	handleModalFilter = ((modalType, modals = []) => {
		const idx = modals.findIndex(({type}) => modalType.toLowerCase() === type.toLowerCase());
		return modals[idx];
	});
	
	render() {
		const {modalType, modals, buttons, modalShow, hideModal, items, drugs} = this.props;
		return (
			<>
				<Container>
					
					<div className="row d-flex justify-content-center mt-3 mb-auto">
						<div className="col-md-6">
							<h5>{this.state._currentDate}</h5>
							<DatePicker setDate={this.setDateFromDatepicker} currentDate={this.props.currentDate}/>
							<ButtonsPanel sleepId={this.state.sleepId} db={this.state.db} buttons={buttons}
														 setSleepId={this.setSleepId} notToday={format(this.props.currentDate, 'yyyy-MM-dd') !== this.state.today}/>
							<List db={this.state.db} data={items} sleepId={this.state.sleepId} setSleepId={this.setSleepId}/>
							<ModalPageComponent db={this.state.db} showModal={modalShow} handleClose={hideModal}
																	modal={this.handleModalFilter(modalType, modals)} drugsList={drugs}/>
						</div>
					</div>
				</Container>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		buttons: state.buttons.buttons,
		modalShow: state.buttons.modalShow,
		modalType: state.buttons.modalType,
		modals: state.buttons.modals,
		items: state.data.items,
		currentDate: state.data.currentDate,
		drugs: state.settings.drugs
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
		...bindActionCreators({disableButton, enableButton, setItem, hideModal, showModal, setItems, setDrugs, setDate}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
