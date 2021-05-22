import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App = ()=>(
	<Router>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/dashboard" component={Dashboard}/>
		</Switch>	
	</Router>
);

export default App;