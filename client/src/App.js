import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/Login" component={LogIn} />
				<Route exact path="/Register" component={Register} />
				<Route exact path="/Contact" component={Contact} />
			</Switch>
			<Switch>
				<Route path="/Dashboard" component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;
