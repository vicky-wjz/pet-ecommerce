import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils.js';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Logo from './cat.png';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './header.scss';


const Header = ({ currentUser, hidden }) =>(
	<div className='header'>
		<Link className='logo-container' to="/">
			<img className='logo' alt='logo' src={Logo} />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/shop'>
				CONTACT
			</Link>
			{
				currentUser ?
				<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
				:
				<Link className='option' to='/signin'>SIGN IN</Link>

			}
			<CartIcon />

		</div>
		{
		hidden ? null :
		<CartDropdown />
		}
	</div>
	);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);