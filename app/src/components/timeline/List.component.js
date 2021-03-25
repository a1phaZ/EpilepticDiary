import React from 'react';
import Element from "./Element.component";

const List = ({data}) => {
	return data.map((element, idx) => {
		return (
			<div key={idx} className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
				<Element {...element}/>
			</div>
		)
	})
}

export default List;
