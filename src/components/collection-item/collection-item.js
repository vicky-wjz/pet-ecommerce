import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.scss';
import CustomButton from '../custom-button/custom-button';

const CollectionItem = ({item, addItem}) => {
	const { name, price, imageUrl } = item;
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
			<CustomButton onClick={()=> addItem(item)} inverted> Add to cart</CustomButton>	
	</div>	
	)		
	}
const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);