import React, {Component} from "react";
import {Container} from "react-bootstrap";
import List from "./components/timeline/List.component";
import './App.css';
import ButtonsPanel from "./components/buttonsPanel/ButtonsPanel.component";
import {bindActionCreators} from "redux";
import {disableButton, enableButton, hideModal, showModal} from "./store/buttonsPanel/actions";
import {connect} from "react-redux";
import {setItem} from "./store/data/actions";
import ModalPageComponent from "./components/modalPage/ModalPage.component";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_currentDate: new Intl.DateTimeFormat('ru-RU', {day: 'numeric', month: 'long', year: 'numeric'}).format(new Date())
		}
		this.handlerShowModal = this.handlerShowModal.bind(this);
		this.handleModalFilter = this.handleModalFilter.bind(this);
	}
	
	handlerShowModal = () => {
		this.props.showModal();
	}
	
	handleModalFilter = ((modalType, modals = []) => {
		const idx = modals.findIndex(({type}) => modalType.toLowerCase() === type.toLowerCase());
		return modals[idx];
	})
	
	render() {
		const {modalType, modals} = this.props;
		return (
			<Container>
				<div className="row d-flex justify-content-center mt-3 mb-auto">
					<div className="col-md-6">
						<div className="main-card mb-3 card">
							<div className="card-body">
								<h5 className="card-title">{this.state._currentDate}</h5>
								<ButtonsPanel buttons={this.props.buttons} />
								<List data={this.props.data} />
								<ModalPageComponent showModal={this.props.modalShow} handleClose={this.props.hideModal} modal={this.handleModalFilter(modalType, modals)}/>
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
		data: state.data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
		...bindActionCreators({disableButton, enableButton, setItem, hideModal, showModal}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
