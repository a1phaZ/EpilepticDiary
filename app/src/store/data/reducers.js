import {SET_ITEM} from './actionTypes';

const initialState = []

export const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ITEM: {
			return [
				...state,
				action.payload.item
			];
		}
		default: {
			return state;
		}
	}
}

// {
// 	type: 'сон',
// 		subType: 'начало',
// 	time: new Date().getTime(),
// 	color: 'badge-primary'
// },
// {
// 	type: 'сон',
// 		subType: 'конец',
// 	quality: 3,
// 	time: new Date().getTime(),
// 	color: 'badge-primary'
// },
// {
// 	type: 'еда',
// 		description: 'Брокколи с яйцом',
// 	time: new Date().getTime(),
// 	color: 'badge-success'
// },
// {
// 	type: 'Лекарства',
// 		drugs: [
// 	{
// 		title: 'Депакин',
// 		dosage: '150',
// 	},
// 	{
// 		title: 'Магний',
// 		dosage: '200',
// 	}
// ],
// 	time: new Date().getTime(),
// 	color: 'badge-warning'
// },
// {
// 	type: 'Приступы',
// 		count: 10,
// 	series: true,
// 	strength: 1,
// 	time: new Date().getTime(),
// 	color: 'badge-danger'
// },