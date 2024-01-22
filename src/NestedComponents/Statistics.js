import React from 'react';
import { Metric } from './Metric';
import './Statistics.css';

export const Statistics = props => {
	const completedTodos = () => {
		let acc = props.todoList.reduce((acc, curr) => {
			if (curr.status === true) {
				acc++;
			}
			return acc;
		}, 0);
		return acc;
	};

	const outstandingTodos = () => {
		let count = 0;
		props.todoList.map(elem => {
			if (elem.status === false) {
				count++;
			}
		});
		return count;
	};

	return (
		<div className='statistics-container'>
			<p className='statistics-title'>Statistics.js</p>
			<div className='metrics-flex-container'>
				<Metric label={'Completed Tasks'} value={completedTodos()} />
				<Metric label={'Outstanding Tasks'} value={outstandingTodos()} />
			</div>
		</div>
	);
};
