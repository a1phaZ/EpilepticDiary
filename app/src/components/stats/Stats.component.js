import React, {Component} from 'react';
import {get, init_db} from "../../_functions/db";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setDB} from "../../store/data/actions";
import {Form, FormGroup} from "react-bootstrap";
import {startOfMonth, endOfMonth, format} from 'date-fns';
import {
	data4Stats,
	filteredByAttack,
	prepareAttackColumns,
	reduceAttackByDate
} from "../../_functions/stats";


class StatsComponent extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			db: this.props.db,
			month: format(new Date(), 'yyyy-MM'),
			startOfRange: format(startOfMonth(new Date()), 'yyyy-MM-dd'),
			endOfRange: format(endOfMonth(new Date()), 'yyyy-MM-dd'),
			data4Stats: []
		}

		this.initDB = this.initDB.bind(this);
		this.prepareData = this.prepareData.bind(this);
	}
	
	initDB = async () => {
		await init_db.call(this);
		await this.prepareData();
	}
	
	componentDidMount() {
		this.initDB();
	}
	
	prepareData = async () => {
		const {db} = this.state;
		const items = await get(db, 'items', 'date', IDBKeyRange.bound(this.state.startOfRange, this.state.endOfRange));
		const attackItems = filteredByAttack(items, 'приступы');
		const attacksGroupedByDate = reduceAttackByDate(attackItems);
		const attackColumns = prepareAttackColumns(attacksGroupedByDate);

		const opts = {
			colors: ['#3DC23F', '#F34C40'],
			columns: attackColumns,
			names: ['Count', 'Strength'],
			types: ['line', 'line']
		}
		
		this.setState({
			data4Stats: data4Stats(opts)
		})
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.startOfRange !== this.state.startOfRange && prevState.endOfRange !== this.state.endOfRange) {
			this.prepareData();
		}
	}
	
	render() {
		return (
			<FormGroup className={'date-picker'}>
				<Form>
					<Form.Control
						type={'month'}
						className={'month-picker-input'}
						onKeyDown={(e) => e.preventDefault()}
						value={this.state.month}
						onChange={(e) => {
							const {value} = e.currentTarget;
							this.setState({
								month: value,
								startOfRange: format(startOfMonth(new Date(value)), 'yyyy-MM-dd'),
								endOfRange: format(endOfMonth(new Date(value)), 'yyyy-MM-dd')
							});
						}}
					/>
				</Form>
			</FormGroup>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		db: state.data.db
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
		...bindActionCreators({setDB}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsComponent);
