import {RESET_ITEM, SET_ITEM, SET_ITEMS} from './actionTypes';

const initialState = {
	currentDate: new Date().getTime(),
	items: []
}

const sortData = (data) => data.sort((a, b) => {
	if (a.time > b.time) return -1;
	return 1;
});

export const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ITEM: {
			return {
				...state,
				items: sortData([...state.items, action.payload.item])
			};
		}
		case SET_ITEMS: {
			return {
				...state,
				items: sortData(action.payload.items)
			}
		}
		case RESET_ITEM: {
			const {item} = action.payload;
			const idx = state.items.findIndex(({time}) => time === item.time);
			if (idx === -1) {
				return {
					...state,
				}
			}
			const newItems = [...state.items];
			newItems.splice(idx, 1, item);
			return {
				...state,
				items: sortData([...newItems])
			}
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