import React, { useSate, useEffect } from 'react';
import querystring from 'query-string';
import axios from 'axios';

const Contact = ({ location }) => {
	const ENDPOINT = 'localhost:4000';

	const [name] = useSate('');

	useEffect(() => {
		const { name } = querystring.parse(location.search);

		return async () => {
			await axios
				.get('http://localhost:4000/api/v1/users/')
				.then(response => console.log(response))
				.catch(error => console.error(error));
		};
	}, [ENDPOINT, location.search]);

	return <div></div>;
};

export default Contact;
