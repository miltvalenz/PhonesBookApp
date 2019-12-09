import React, { Component } from 'react';

class ContactRegister extends Component {
	constructor() {
		super();
		this.state = {
			Name: '',
			Email: '',
			Number1: '',
			Number2: ''
		};

		this.Email = this.Email.bind(this);
		this.Name = this.Name.bind(this);
		this.Number1 = this.Number1.bind(this);
		this.Number2 = this.Number2.bind(this);

		this.Register = this.Register.bind(this);
	}

	Email(event) {
		this.setState({ Email: event.target.value });
	}

	Name(event) {
		this.setState({ Name: event.target.value });
	}

	Number1(event) {
		this.setState({ Number1: event.target.value });
	}

	Number2(event) {
		this.setState({ Number2: event.target.value });
	}

	Register(event) {
		event.preventDefault();
		fetch('http://localhost:4000/api/v1/contacts/create', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.Name,
				email: this.state.Email,
				phone1: this.state.Phone1,
				phone2: this.state.Phone2
			})
		})
			.then(Response => Response.json())
			.then(result => {
				console.log(result);
				if (result.Status === 200) alert('Contact Saved!');
				else this.props.history.push('/Dashboard');
			})
			.catch(error => console.log(error));
	}

	render() {
		return (
			<div>
				<div>Create New Contact</div>
				<div>
					<form>
						<input
							type="text"
							placeholder="Enter Name"
							onChange={this.Name}
						/>
						<input
							type="text"
							placeholder="Enter Email"
							onChange={this.Email}
						/>
						<input
							type="number"
							placeholder="Enter Primary Number"
							onChange={this.Number1}
						/>
						<input
							type="number"
							placeholder="Enter Second Number"
							onChange={this.Number2}
						/>
						<button onClick={this.Register}>Create</button>
					</form>
				</div>
			</div>
		);
	}
}

export default ContactRegister;
