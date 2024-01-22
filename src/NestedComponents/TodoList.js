import React from 'react';
import { TodoListItem } from './TodoListItem';
import './TodoList.css';

export const TodoList = props => {
	const { todoList } = props;
	return (
		<div className='todo-list-container'>
			<p className='todo-list-title'>TodoList.js</p>
			<div className='todo-list-items'>
				{todoList.map(todo => {
					return <TodoListItem task={todo} key={todo.todoName} />;
				})}
			</div>
		</div>
	);
};
