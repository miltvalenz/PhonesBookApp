import React, { Component } from 'react';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			Name: '',
			Email: '',
			Password: '',
			PasswordConfirmation: ''
		};

		this.Email = this.Email.bind(this);
		this.Name = this.Name.bind(this);
		this.Password = this.Password.bind(this);
		this.PasswordConfirmation = this.PasswordConfirmation.bind(this);

		this.Register = this.Register.bind(this);
	}

	Email(event) {
		this.setState({ Email: event.target.value });
	}

	Name(event) {
		this.setState({ Name: event.target.value });
	}

	Password(event) {
		this.setState({ Password: event.target.value });
	}

	PasswordConfirmation(event) {
		this.setState({ PasswordConfirmation: event.target.value });
	}

	Register(event) {
		event.preventDefault();
		fetch('http://localhost:4000/api/v1/users/register', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.Email,
				name: this.state.Name,
				password: this.state.Password,
				passwordConfirmation: this.state.PasswordConfirmation
			})
		})
			.then(Response => Response.json())
			.then(result => {
				console.log(result);
				if (result.Status === 200) alert('registrado');
				else this.props.history.push('/Dashboard');
			})
			.catch(error => console.log(error));
	}

	render() {
		return (
			<div >
				<div>Register</div>
				<div>
					<form>
						<input
							type="text"
							placeholder="Enter your Name"
							onChange={this.Name}
						/>
						<input
							type="text"
							placeholder="Enter your Email"
							onChange={this.Email}
						/>
						<input
							type="password"
							placeholder="Enter Password"
							onChange={this.Password}
						/>
						<input
							type="password"
							placeholder="Confirm Password"
							onChange={this.PasswordConfirmation}
						/>
						<button onClick={this.Register}>Register</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
