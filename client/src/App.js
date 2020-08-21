import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/contact" component={Contact} />
		</Router>
	);
};

export default App;
