import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils.js';

import { connect } from 'react-redux';

import Logo from './cat.png';


import './header.scss';


const Header = ({ currentUser }) =>(
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

		</div>
	</div>
	);
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser 
})


export default connect(mapStateToProps)(Header);