import React from 'react';
import SignIn from '../../components/signin/signin.js';
import Register from '../../components/register/register.js';

import './signin-and-register.scss';


const SignInAndRegisterPage = () => (
	<div className='signin-and-register'>
		<SignIn />
		<Register />

	</div>
	)

export default SignInAndRegisterPage;