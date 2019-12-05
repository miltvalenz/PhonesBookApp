import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './LogIn.css';

const LogIn = () => {
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const onSubmit = event => {
		event.preventDefault();

		axios({
			method: 'post',
			url: 'http://localhost:4000/api/v1/users/login',
			data: {
				email,
				password
			}
		})
			.then(response => console.log(response))
			.catch(error => console.log(error));
	};

	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">LogIn</h1>
				<div>
					<input
						placeholder="Email"
						className="joinInput"
						type="text"
						onChange={event => setEmail(event.target.value)}
					/>
				</div>
				<div>
					<input
						placeholder="Password"
						className="joinInput mt-20"
						type="text"
						onChange={event => setPassword(event.target.value)}
					/>
				</div>
				<Link
					onClick={event =>
						!email || !password ? onSubmit(event) : null
					}
					to={`/user?user=${email}`}
				>
					<button className="button" type="submit">
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
};

export default LogIn;
