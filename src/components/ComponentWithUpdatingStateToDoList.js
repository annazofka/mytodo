import React, { Component } from 'react';

export default class ToDosComponent extends Component {
	state = {
		inputValue: '',
		todos: [],
	};

	handleClick = event => {
		this.setState({ todos: [...this.state.todos, this.state.inputValue], inputValue: '' });
	};

	handleChange = event => {
		this.setState({ inputValue: event.target.value });
	};

	handleShowCurrentState = () => {
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<input value={this.state.inputValue} type='text' placeholder='Enter task' onChange={this.handleChange} />
				<button onClick={this.handleClick}>Add task</button>
				<button onClick={this.handleShowCurrentState}>Display current state</button>
				{this.state.todos.map(todo => {
					return <p key={todo}>{todo}</p>;
				})}
			</div>
		);
	}
}
