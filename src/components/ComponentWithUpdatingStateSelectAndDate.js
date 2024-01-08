import React, { Component } from 'react';

export default class ToDoListSelectComponent extends Component {
	state = {
		todoName: '',
		status: false,
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

	handleStatusChange = event => {
		this.setState({ status: event.target.checked });
	};

	handleAddTaskClick = event => {
		const { todoName, status, dueDate, difficulty } = this.state;

		const newTask = {
			todoName,
			status,
			dueDate,
			difficulty,
		};

		this.setState({
			todoList: [...this.state.todoList, newTask],
			todoName: '',
			status: false,
			dueDate: '',
			difficulty: '',
		});
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

				<input type='checkbox' checked={this.state.status} onChange={this.handleStatusChange} />
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

				<button onClick={this.handleAddTaskClick}>Add Task</button>
				{this.state.todoList.map(todo => {
					return (
						<p>
							Task: {todo.todoName} | Deadline: {todo.dueDate} | Difficulty: {todo.difficulty}
						</p>
					);
				})}

				<div>
					<p>Task: {this.state.todoName}</p>
				</div>
				<div>
					<p>Status: {this.state.status ? 'Done' : 'Not yet done'}</p>
				</div>
				<div>
					<p>Deadline: {this.state.dueDate}</p>
				</div>
				<div>
					<p>Difficulty: {this.setDifficulty()}</p>
				</div>

				<table>
					<thead>
						<tr>
							<th>Task</th>
							<th>Status</th>
							<th>Difficulty</th>
							<th>Deadline</th>
						</tr>
					</thead>
					<tbody>
						{this.state.todoList.map(task => {
							return (
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
