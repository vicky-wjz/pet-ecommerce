import React from 'react';
import './directory.scss';
import MenueItem from '../menu-item/menu-item.js';

class Directory extends React.Component {
	constructor(){
		super();
		this.state={
			sections:[
			  {
			    title: 'Cat Food',
			    imageUrl: 'https://images.unsplash.com/photo-1580238169544-86bf7cd8c84c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80',
			    id: 1,
			    linkUrl: 'shop/food'
			  },
			  {
			    title: 'Litter',
			    imageUrl: 'https://images.pexels.com/photos/2822555/pexels-photo-2822555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			    id: 2,
			    linkUrl: 'shop/litter'
			  },
			  {
			    title: 'Flea and Worming',
			    imageUrl: 'https://images.pexels.com/photos/2095954/pexels-photo-2095954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			    id: 3,
			    linkUrl: 'shop/fleaworming'
			  },
			  {
			    title: 'Toys',
			    imageUrl: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=597&q=80',
			    size: 'large',
			    id: 4,
			    linkUrl: 'shop/toys'
			  },
			  {
			    title: 'Treats',
			    imageUrl: 'https://images.pexels.com/photos/205975/pexels-photo-205975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			    size: 'large',
			    id: 5,
			    linkUrl: 'shop/treats'
			  }
			]

		}
	}

	render(){
		return(
			<div className='directory-menu'>
				{
					this.state.sections.map(({title,id,imageUrl,size}) => (
						<MenueItem key={id} title={title} imageUrl={imageUrl} size={size}/>))
				}
			</div>
			)
			
	}			
	
}

export default Directory