import React from 'react';
import './collection-item.scss';

const CollectionItem = ({id, name, price, imageUrl}) => {

	// const image = require(`${pictures}/${imageUrl}`);
	
	const image=require(`../../pictures/${imageUrl}`);
	
	//const image=require('../../pictures/royal.jpg');
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage:`url(${image})`
				}}
			/>
		<div className='collection-footer'>
			<span className='name'>{name}</span>
			<span className='price'>${price}</span>
		</div>			
	</div>	
	)		
	}

export default CollectionItem;