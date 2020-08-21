import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Assignments from './pages/Assignments';

const App = () => {
	return (
		<Router>
			<Route exact path={['/', '/home']} component={Home} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/projects" component={Projects} />
			<Route
				exact
				path="/assignments"
				component={Assignments}
			/>
		</Router>
	);
};

export default App;
