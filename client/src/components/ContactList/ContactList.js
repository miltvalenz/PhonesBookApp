import React, { Component } from 'react';
import axios from 'axios';

class ContactList extends Component {
	constructor() {
		super();
		this.state = {
			Contacts: [],
			isLoading: false
		};
	}

	componentDidMount() {
		let config = {
			headers: {
				Authorization:
					'Bearer ' +
					'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVkZTg0M2NjM2M0OTYyMjdhY2RlZmVlOSIsImVtYWlsIjoibWlsdG9udmFsQGhvdG1haWwuY29tIiwiZXhwaXJlcyI6MTU3NTkzMzAyMDMzOH0.glDAVFKPKqu0zm3JrL9z-wdpGTTx_KexsgQjwLmmgF0'
			}
		};

		this.setState({ isLoading: true });

		axios
			.get('http://localhost:4000/api/v1/contacts', config)
			.then(result => {
				console.log(result);
				this.setState({
					Contacts: result.data.Contact,
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
				<ul>
					{this.state.Contacts.map(contact => (
						<li key={contact.id}>
							<p>{contact.name}</p>
							<p>{contact.number1}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default ContactList;
