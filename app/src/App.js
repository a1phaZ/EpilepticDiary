import React, {Component} from "react";
import {Container} from "react-bootstrap";
import List from "./components/timeline/List.component";
import './App.css';
import ButtonsPanel from "./components/buttonsPanel/ButtonsPanel.component";
import {bindActionCreators} from "redux";
import {disableButton, enableButton} from "./store/buttonsPanel/actions";
import {connect} from "react-redux";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mock: [
				{
					type: 'сон',
					subType: 'начало',
					time: new Date().getTime(),
					color: 'badge-primary'
				},
				{
					type: 'сон',
					subType: 'конец',
					quality: 3,
					time: new Date().getTime(),
					color: 'badge-primary'
				},
				{
					type: 'еда',
					description: 'Брокколи с яйцом',
					time: new Date().getTime(),
					color: 'badge-success'
				},
				{
					type: 'Лекарства',
					drugs: [
						{
							title: 'Депакин',
							dosage: '150',
						},
						{
							title: 'Магний',
							dosage: '200',
						}
					],
					time: new Date().getTime(),
					color: 'badge-warning'
				},
				{
					type: 'Приступы',
					count: 10,
					series: true,
					strength: 1,
					time: new Date().getTime(),
					color: 'badge-danger'
				},
			],
			_currentDate: new Intl.DateTimeFormat('ru-RU', {day: 'numeric', month: 'long', year: 'numeric'}).format(new Date())
		}
		this.addItemToTimeLine = this.addItemToTimeLine.bind(this);
	}
	
	addItemToTimeLine = (e) => {
		const {type, subType, color} = e.currentTarget.dataset;
		const item = {
				type: type,
				subType: subType,
				time: new Date().getTime(),
				color: `badge-${color}`
			};
		this.setState({mock: [...this.state.mock, item]});
	}
	
	render() {
		return (
			<Container>
				<div className="row d-flex justify-content-center mt-3 mb-auto">
					<div className="col-md-6">
						<div className="main-card mb-3 card">
							<div className="card-body">
								<h5 className="card-title">{this.state._currentDate}</h5>
								<ButtonsPanel buttons={this.props.buttons} />
								<List data={this.state.mock} />
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
		buttons: state.buttons
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
		...bindActionCreators({disableButton, enableButton}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
