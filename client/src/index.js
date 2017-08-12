import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false
		};
		this.onClickHandler = this.onClickHandler.bind(this);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
