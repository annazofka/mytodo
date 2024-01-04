import React, { Component } from 'react';

export default class ComponentWithUpdatingStateCheckbox extends Component {
	state = {
		todoName: '',
		status: false,
		todos: [{ status: false, todoName: 'test task' }], // array of objects
	};

	handleInput = event => {
		this.setState({ todoName: event.target.value });
	};

	handleCheckboxStatusChange = event => {
		this.setState({ status: event.target.checked });
	};

	handlePressEnter = event => {
		const newTodo = {
			status: this.state.status,
			todoName: this.state.todoName,
		};
		if (event.key === 'Enter') {
			console.log('pressed enter');
			this.setState({ todos: [...this.state.todos, newTodo], todoName: '', status: false });
		}
	};

	handleButtonClick = event => {
		const newTodo = {
			status: this.state.status,
			todoName: this.state.todoName,
		}; // new object
		this.setState({ todos: [...this.state.todos, newTodo], todoName: '', status: false }); //creates new array based on the array in previous state and adds newTodo object, then resets todoName to empty string and status to unchecked
	};

	render() {
		return (
			<div onKeyDown={this.handlePressEnter}>
				<input type='text' placeholder='enter task' value={this.state.todoName} onChange={this.handleInput} />
				<input type='checkbox' name='' id='' checked={this.state.status} onChange={this.handleCheckboxStatusChange} />
				<button onClick={this.handleButtonClick}>Add task</button>
				{this.state.todos.map(todo => {
					return (
						<p>
							Task: {todo.todoName} | Status: {todo.status ? 'Done' : 'To do'}
						</p>
					);
				})}
			</div>
		);
	}
}
