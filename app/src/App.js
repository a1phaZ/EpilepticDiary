import React, {Component} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import List from "./components/timeline/List.component";
import './App.css';
import ButtonsPanel from "./components/buttonsPanel/ButtonsPanel.component";
import {bindActionCreators} from "redux";
import {disableButton, enableButton, hideModal, showModal} from "./store/buttonsPanel/actions";
import {connect} from "react-redux";
import {setItem, setItems} from "./store/data/actions";
import ModalPageComponent from "./components/modalPage/ModalPage.component";
import {get, initializeDB} from "./_functions/db";
import {format, subDays} from 'date-fns';
import {sortData} from "./_functions/handlersData";

const ITEMS = 'items';
const READWRITE = 'readwrite';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			db: null,
			_currentDate: new Intl.DateTimeFormat('ru-RU', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			}).format(new Date(this.props.currentDate)),
			sleepId: -1,
		}
		this.handlerShowModal = this.handlerShowModal.bind(this);
		this.handleModalFilter = this.handleModalFilter.bind(this);
		this.initDB = this.initDB.bind(this);
		this.getItems = this.getItems.bind(this);
		this.addItem = this.addItem.bind(this);
		this.setSleepId = this.setSleepId.bind(this);
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
		
		if (subDaysItem[0].type.toLowerCase() === 'сон') {
			if (subDaysItem[0].subType.toLowerCase() === 'начало') {
				items.push(subDaysItem[0]);
			}
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
	
	setSleepId = (id) => {
		this.setState({sleepId: id});
	}
	
	handleModalFilter = ((modalType, modals = []) => {
		const idx = modals.findIndex(({type}) => modalType.toLowerCase() === type.toLowerCase());
		return modals[idx];
	});
	
	render() {
		const {modalType, modals, buttons, modalShow, hideModal, items} = this.props;
		return (
			<>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
							<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider/>
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Nav.Link href="#deets">More deets</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Dank memes
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Container>
					
					<div className="row d-flex justify-content-center mt-3 mb-auto">
						<div className="col-md-6">
							{/*<div className="main-card mb-3 card">*/}
							{/*	<div className="card-body">*/}
									<h5>{this.state._currentDate}</h5>
									<ButtonsPanel sleepId={this.state.sleepId} db={this.state.db} buttons={buttons}
																setSleepId={this.setSleepId}/>
									<List db={this.state.db} data={items} sleepId={this.state.sleepId} setSleepId={this.setSleepId}/>
									<ModalPageComponent db={this.state.db} showModal={modalShow} handleClose={hideModal}
																			modal={this.handleModalFilter(modalType, modals)}/>
							{/*	</div>*/}
							{/*</div>*/}
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
