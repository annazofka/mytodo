import React, { Component } from 'react';

import SadCat from '../images/sad_cat.jpeg';
import SmilingCat from '../images/smiling_cat.jpeg';

export default class ToDoListSelectComponent extends Component {
	state = {
		todoName: '',
		status: false,
		dueDate: new Date().toISOString().slice(0, 10),
		priority: 0,
		difficulty: 1,
		todoList: [],
	};

	setDifficulty = difficulty => {
		const difficultyMap = {
			// 1: 'Easy',
			// 2: 'Medium',
			// 3: 'Hard',
			1: <h3>Easy</h3>,
			2: <h2>Medium</h2>,
			3: <h1>Hard</h1>,
		};

		// if (difficulty === '1') {
		// 	return 'Easy';
		// }
		// if (difficulty === '2') {
		// 	return 'Medium';
		// }
		// if (difficulty === '3') {
		// 	return 'Hard';
		// }

		return difficultyMap[difficulty];
	};

	handlePriorityChange = event => {
		this.setState({ priority: event.target.value });
	};

	handleStatusChange = event => {
		this.setState({ status: event.target.checked });
	};

	handleAddTaskClick = event => {
		const { todoName, status, dueDate, priority, difficulty } = this.state;

		const newTask = {
			todoName,
			status,
			dueDate,
			priority,
			difficulty,
		};

		this.setState({
			todoList: [...this.state.todoList, newTask],
			todoName: '',
			status: false,
			dueDate: '',
			priority: 0,
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

				<input type='range' min={0} max={10} value={this.state.priority} onChange={this.handlePriorityChange} />

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

				{/* <div>
					<p>Task: {this.state.todoName}</p>
				</div>
				<div>
					<p>Status: {this.state.status ? 'Done' : 'Not yet done'}</p>
				</div>
				<div>
					<p>Priority: {this.state.priority}</p>
				</div>
				<div>
					<p>Deadline: {this.state.dueDate}</p>
				</div>
				<div>
					<p>Difficulty: {this.setDifficulty(this.state.difficulty)}</p>
				</div> */}

				<table>
					<thead>
						<tr>
							<th>Task</th>
							<th>Status</th>
							<th>Difficulty</th>
							<th>Priority</th>
							<th>Deadline</th>
						</tr>
					</thead>
					<tbody>
						{this.state.todoList.map(task => {
							return (
								<tr key={task.todoName}>
									<td>{task.todoName}</td>
									<td>
										<img width={50} height={50} src={task.status ? SmilingCat : SadCat} alt='cat' />
										{/* <input type='checkbox' checked={task.status} /> */}
									</td>
									<td>{this.setDifficulty(task.difficulty)}</td>
									<td>{task.priority}</td>
									<td>{task.dueDate}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
