import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Global } from './views/Global';
import "./scss/formare-docs.scss";

class App extends Component {
	render() {
		return (
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route path="/" component={Global} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;