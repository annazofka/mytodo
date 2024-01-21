import React from 'react';
import { TodoListItem } from './TodoListItem';
import './TodoList.css';

export const TodoList = () => {
	return (
		<div className='todo-list-container'>
			<p className='todo-list-title'>TodoList.js</p>
			<div className='todo-list-items'>
				<TodoListItem />
				<TodoListItem />
				<TodoListItem />
			</div>
		</div>
	);
};
