import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const BuildingBlocks = () => (
	<Router>
		<Switch>
			<Route exact />
		</Switch>
	</Router>
);

ReactDOM.render(
	<BuildingBlocks />,
	document.getElementById('root')
);
registerServiceWorker();
