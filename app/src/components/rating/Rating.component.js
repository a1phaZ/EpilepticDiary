import React from 'react';
import './rating.styles.css';

const ratingArray = [1, 2, 3, 4, 5];
const Rating = ({count}) => {
	const _renderedStars = ratingArray.map((item) => {
		return (<span key={item} className={`fa fa-star ${item <= count && 'checked'}`}/>)
	})
	return (
		<span className={'rating'} >
			{_renderedStars}
		</span>
	)
}

export default Rating;
