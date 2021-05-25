import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import {ProtectedRoute} from './routes/protected.routes';
import Dashboard from './pages/Dashboard';
import {PATH_DASHBOARD, PATH_HOME} from './routes/paths.routes';

const App = ()=>(
	<Router>
		<Switch>
			<Route exact path={PATH_HOME} component={Home}/>
			<ProtectedRoute path={PATH_DASHBOARD} component={Dashboard}/>
		</Switch>	
	</Router>
);

export default App;