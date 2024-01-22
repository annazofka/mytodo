import React from 'react';
import './Metric.css';

export const Metric = props => {
	const { label, value } = props;
	return (
		<div className='metric-container'>
			<p className='metric-title'>
				{label}: {value}
			</p>
		</div>
	);
};
