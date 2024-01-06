import React, { Component } from 'react';

export default class ToDoListSelectComponent extends Component {
	state = {
		todoName: '',
		// status: false,
		dueDate: new Date().toISOString().slice(0, 10),
		difficulty: 1,
		todoList: [],
	};

	setDifficulty = () => {
		const { difficulty } = this.state;
		const difficultyMap = {
			1: 'Easy',
			2: 'Medium',
			3: 'Hard',
		};

		return difficultyMap[difficulty];

		// if (difficulty === '1') {
		// 	return 'Easy';
		// }
		// if (difficulty === '2') {
		// 	return 'Medium';
		// }
		// if (difficulty === '3') {
		// 	return 'Hard';
		// }
	};

	handleAddTaskClick = event => {
		const newTask = {
			Task: this.state.todoName,
			Deadline: this.state.dueDate,
			Difficulty: this.state.difficulty,
		};

		this.setState({ todoList: [...this.state.todoList, newTask], todoName: '', dueDate: '', difficulty: '' });
	};

	render() {
		return (
			<div>
				<input
					type='text'
					placeholder='Enter task'
					value={this.state.todoName}
					onChange={event => this.setState({ todoName: event.target.value })}
				/>
				<input
					type='date'
					value={this.state.dueDate}
					onChange={event => this.setState({ dueDate: event.target.value })}
				/>

				<select onChange={event => this.setState({ difficulty: event.target.value })}>
					<option value={1}>Easy</option>
					<option value={2}>Medium</option>
					<option value={3}>Hard</option>
				</select>
				{/* <div>
					<p>Task: {this.state.todoName}</p>
				</div>
				<div>
					<p>Deadline: {this.state.dueDate}</p>
				</div>
				<div>
					<p>Difficulty: {this.setDifficulty()}</p>
				</div> */}

				<button onClick={this.handleAddTaskClick}>Add Task</button>
				{this.state.todoList.map(todo => {
					return (
						<p>
							Task: {todo.todoName} | Deadline: {todo.dueDate} | Difficulty: {todo.difficulty}
						</p>
					);
				})}
			</div>
		);
	}
}
