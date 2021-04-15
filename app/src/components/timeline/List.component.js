import React from 'react';
import Element from "./Element.component";

const List = ({db, data, sleepId, setSleepId, deleteItem}) => {
	return data.map((element, idx) => {
		return (
			<div key={idx} className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
				<Element db={db} {...element} sleepId={sleepId} setSleepId={setSleepId} index={idx} deleteItem={deleteItem}/>
			</div>
		)
	})
}

export default List;
