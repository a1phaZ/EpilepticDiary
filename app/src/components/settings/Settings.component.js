import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {deleteItem, get, initializeDB} from "../../_functions/db";
import {setDrug, setDrugs} from "../../store/settings/actions";
import DrugForm from "./DrugForm.component";
import DrugsList from "./DrugsList";
import {sortData} from "../../_functions/handlersData";

const SETTINGS = 'settings';
const READWRITE = 'readwrite';

class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			db: null,
			drug: {
				type: 'drug',
				title: '',
				dosage: 0
			}
		}
		
		this.initDB = this.initDB.bind(this);
		this.getItems = this.getItems.bind(this);
		this.setDrug = this.setDrug.bind(this);
		this.deleteDrug = this.deleteDrug.bind(this);
	}
	
	initDB = async () => {
		const db = await initializeDB();
		
		this.setState({db: db});
		
		if (this.props.drugs.length <= 0) {
			await this.getItems();
		}
	}
	
	getItems = async () => {
		const {db} = this.state;
		let drugs = await get(db, SETTINGS, 'type', 'drug');
		if (drugs.length === 0) {
			this.props.setDrugs([]);
		}
		if (drugs.length) {
			this.props.setDrugs(drugs);
		}
	}
	
	addItem = async (setting) => {
		const {db} = this.state;
		let tx = db.transaction(SETTINGS, READWRITE);
		let settingsStore = tx.objectStore(SETTINGS);
		try {
			await settingsStore.add(setting);
		} catch (e) {
			throw e;
		}
	}
	
	setDrug = async (drug) => {
		await this.addItem(drug);
		await this.getItems();
	}
	
	deleteDrug = async (key) => {
		await deleteItem(this.state.db, SETTINGS, +key);
		await this.getItems();
	}
	
	componentDidMount() {
		this.initDB();
	}
	
	render() {
		return (
			<Container>
				<div className="row d-flex justify-content-center mt-3 mb-auto">
					<div className="col-md-6">
						<h5>Настройки</h5>
						<div className={'dropdown-divider'} />
						<h6>Лекарства</h6>
						<DrugForm setDrug={this.setDrug} />
						<DrugsList data={sortData(this.props.drugs)} deleteItem={this.deleteDrug}/>
						<div className={'dropdown-divider'} />
					</div>
				</div>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		drugs: state.settings.drugs,
		
	}
}

function mapDispatchToProps (dispatch) {
	return {
		dispatch,
		...bindActionCreators({setDrugs, setDrug}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
