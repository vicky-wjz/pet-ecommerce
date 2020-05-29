import React from 'react';

import FormInput from '../form-input/form-input.js';

import CustomButton from '../custom-button/custom-button.js';

import './register.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';


class Register extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const {displayName, email, password, confirmPassword} = this.state;
		
		if (password !== confirmPassword) {
			alert("password don't match ");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });

			this.setState ({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		});

		} catch(error) {
			console.error(error);
		}

		
	}

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value})
	}


	render() {
		const {displayName, email, password, confirmPassword} = this.state;
		return(
			<div className='sign-up'>
				<h2 className='title'> I do not have an account</h2>
				<span> Sign up with your email and password</span>

				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput name="displayName" type='text' label='name' value={displayName} handleChange={this.handleChange} required />
					<FormInput name="email" type='email' label='email' value={email} handleChange={this.handleChange} required />
					<FormInput name="password" type='password' label='password' value={password} handleChange={this.handleChange} required />
					<FormInput name="confirmPassword" type='password' label='confirmpassword' value={confirmPassword} handleChange={this.handleChange} required />
					<CustomButton type="submit">Sign Up</CustomButton>
						
				</form>
			</div>

			)
	}
}

export default Register;