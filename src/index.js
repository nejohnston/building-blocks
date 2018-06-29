import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import HomeContainer from './containers/Home';

const BuildingBlocks = () => (
	<Router>
		<Switch>
			<Route
				exact
				path="/"
				component={HomeContainer}
			/>
		</Switch>
	</Router>
);

ReactDOM.render(
	<BuildingBlocks />,
	document.getElementById('root')
);
registerServiceWorker();
