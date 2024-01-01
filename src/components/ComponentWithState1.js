import React, { Component } from 'react';

export default class ComponentWithState1 extends Component {
	state = {
		todo: {
			task: 'wash dishes',
			status: 'to do',
		},
	};

	render() {
		return (
			<ul>
				<li>{this.state.todo.task}</li>
				<li>{this.state.todo.status}</li>
			</ul>
		);
	}
}
