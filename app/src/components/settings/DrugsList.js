import React from 'react';

const DrugList = ({data}) => {
	const _renderedList = data.map((drug, key) => {
		return <li key={key}>{drug.title}</li>
	})
	return (
		<ul>
			{_renderedList}
		</ul>
	)
}

export default DrugList;
