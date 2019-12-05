import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import LogIn from './components/LogIn/LogIn';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Contact/Contact';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/Login" component={Login} />
				<Route path="/Signup" component={Reg} />
			</Switch>
			<Switch>
				<Route path="/Dashboard" component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;
