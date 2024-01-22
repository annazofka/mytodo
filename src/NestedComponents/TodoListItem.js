import React from 'react';
import './TodoListItem.css';

export const TodoListItem = props => {
	console.log(props.task);
	return (
		<div className='todo-list-item-container'>
			<p className='todo-list-item-title'>
                {props.task.todoName}
            </p>
		</div>
	);
};
