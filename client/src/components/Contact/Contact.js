import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
	constructor() {
		super();
		this.state = {
			Name: '',
			Email: '',
			Number1: '',
			Number2: '',
			isLoading: false
		};
	}

	componentDidMount() {
		let config = {
			headers: {
				Authorization:
					'Bearer ' +
					'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVkZTg0M2NjM2M0OTYyMjdhY2RlZmVlOSIsImVtYWlsIjoibWlsdG9udmFsQGhvdG1haWwuY29tIiwiZXhwaXJlcyI6MTU3NTg1NDY3MDI0Mn0.kksdyrudq_pRdsAHCTnkA9WkvyhwjmPZtZJZTFkRnJQ'
			}
		};

		axios
			.get(
				'http://localhost:4000/api/v1/contacts/details/5de85ce5394a743e9c354a9a',
				config
			)
			.then(result => {
				console.log(result);
				this.setState({
					Name: result.data.Contact.name,
					Email: result.data.Contact.email,
					Number1: result.data.Contact.number1,
					Number2: result.data.Contact.number2,
					isLoading: false
				});
			})
			.catch(error =>
				this.setState({
					error,
					isLoading: false
				})
			);
	}

	render() {
		return (
			<div>
				<div>Contact</div>
				<div>
					<p>{this.state.Name}</p>
					<p>{this.state.Email}</p>
					<p>{this.state.Number1}</p>
					<p>{this.state.Number2}</p>
				</div>
			</div>
		);
	}
}

export default Contact;
