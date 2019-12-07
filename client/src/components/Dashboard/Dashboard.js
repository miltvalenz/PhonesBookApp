import React, { Component } from 'react';

class Dashboard extends Component {
	render() {
		return (
			<div className="mb-2 pageheading">
				<div>Dashboard</div>
				<div>
					{fetch(
						'http://localhost:4000/api/v1/users/details/5de843cc3c496227acdefee9',
						{
							method: 'get',
							headers: {
								Accept: 'application/json',
								'Content-Type': 'application/json'
							}
						}
					)}
				</div>
			</div>
		);
	}
}

export default Dashboard;
