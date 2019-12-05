import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import LogIn from './components/LogIn/LogIn';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<Router>
			<Route path="/" exact component={LogIn} />
			<Route path="/contacts" component={Contact} />
		</Router>
	);
}

export default App;
