import React, {Component} from "react";
import {Container} from "react-bootstrap";
import List from "./components/timeline/List.component";
import './App.css';
import ButtonsPanel from "./components/buttonsPanel/ButtonsPanel.component";
import {bindActionCreators} from "redux";
import {disableButton, enableButton, hideModal, showModal} from "./store/buttonsPanel/actions";
import {connect} from "react-redux";
import {setItem, setItems} from "./store/data/actions";
import ModalPageComponent from "./components/modalPage/ModalPage.component";
import {get, initializeDB} from "./_functions/db";
import {format} from 'date-fns';

const ITEMS = 'items';
const READWRITE = 'readwrite';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			db: null,
			_currentDate: new Intl.DateTimeFormat('ru-RU', {day: 'numeric', month: 'long', year: 'numeric'}).format(new Date(this.props.currentDate))
		}
		this.handlerShowModal = this.handlerShowModal.bind(this);
		this.handleModalFilter = this.handleModalFilter.bind(this);
		this.initDB = this.initDB.bind(this);
		this.getItems = this.getItems.bind(this);
		this.addItem = this.addItem.bind(this);
	}
	
	initDB = async () => {
		const db = await initializeDB();
		
		this.setState({db: db});
		
		await this.getItems();
	}
	
	getItems = async () => {
		const {db} = this.state;
		const idxVal = format(new Date(this.props.currentDate), 'yyyy-MM-dd');
		const items = await get(db, ITEMS, 'date', idxVal);
		
		// const tx = db.transaction(ITEMS);
		// const itemsStore = tx.objectStore(ITEMS);
		//
		// const items = await itemsStore.getAll();
		// let cursor = await itemsStore.openCursor();
		// while (cursor) {
		// 	// items.push(cursor.value)
		// 	await setItem(cursor.value);
		// 	cursor = await cursor.continue();
		// }
		if (items.length) {
			this.props.setItems(items);
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
	
	componentDidMount() {
		this.initDB();
	}
	
	handlerShowModal = () => {
		this.props.showModal();
	}
	
	handleModalFilter = ((modalType, modals = []) => {
		const idx = modals.findIndex(({type}) => modalType.toLowerCase() === type.toLowerCase());
		return modals[idx];
	})
	
	render() {
		const {modalType, modals, buttons, modalShow, hideModal, items} = this.props;
		return (
			<Container>
				<div className="row d-flex justify-content-center mt-3 mb-auto">
					<div className="col-md-6">
						<div className="main-card mb-3 card">
							<div className="card-body">
								<h5 className="card-title">{this.state._currentDate}</h5>
								<ButtonsPanel buttons={buttons} />
								<List data={items} />
								<ModalPageComponent db={this.state.db} showModal={modalShow} handleClose={hideModal} modal={this.handleModalFilter(modalType, modals)}/>
							</div>
						</div>
					</div>
				</div>
			</Container>
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
		currentDate: state.data.currentDate
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
		...bindActionCreators({disableButton, enableButton, setItem, hideModal, showModal, setItems}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
