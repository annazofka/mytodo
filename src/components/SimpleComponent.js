import React, { Component } from 'react';

export default class SimpleComponent extends Component {
	render() {
		return (
			<div>
				<h1>Oh, Hello YOU</h1>
				<ComponentExample />
			</div>
		);
	}
}

class ComponentExample extends Component {
	render() {
		return (
			<div>
				Hello <input type='text' /> <button>Click Me</button>
			</div>
		);
	}
}
