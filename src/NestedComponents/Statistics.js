import React from 'react';
import { Metric } from './Metric';
import './Statistics.css';

export const Statistics = () => {
	return (
		<div className='statistics-container'>
			<p className='statistics-title'>Statistics.js</p>
			<div className='metrics-flex-container'>
				<Metric />
				<Metric />
				<Metric />
			</div>
		</div>
	);
};
