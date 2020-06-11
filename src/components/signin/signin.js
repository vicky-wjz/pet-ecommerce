import React from 'react';

import FormInput from '../form-input/form-input.js';

import CustomButton from '../custom-button/custom-button.js';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'; 

import './signin.scss';


class SignIn extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({
			'email': '',
			'password': ''
					})
		} catch(error) {
			console.error(error);
		}
		
	}

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value})
	}

	render() {
		return(
			<div className='sign-in'>
				<h2> I already have an account</h2>
				<span> sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput name="email" type='email' label='email' value={this.state.email} handleChange={this.handleChange} required />
					<FormInput name="password" type='password' label='password' value={this.state.password} handleChange={this.handleChange} required />
					<div className='buttons'>
						<CustomButton type="button">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>

			)
	}
}

export default SignIn;