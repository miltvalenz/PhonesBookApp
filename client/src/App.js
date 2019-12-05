import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/Login" component={LogIn} />
			</Switch>
			<Switch>
				<Route path="/Dashboard" component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;
