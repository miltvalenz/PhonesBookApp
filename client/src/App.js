import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/Login" component={LogIn} />
				<Route exact path="/Register" component={Register} />
			</Switch>
			<Switch>
				<Route path="/Dashboard" component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;
