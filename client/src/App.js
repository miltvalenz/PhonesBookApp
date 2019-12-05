import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import LogIn from './components/LogIn/LogIn';

function App() {
  return (
    <Router>
      <Route path="/" exact component={LogIn}/>
    </Router>
  );
}

export default App;
