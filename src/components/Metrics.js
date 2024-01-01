import React, { Component } from 'react';

export default class MetricsContainer extends Component {
	render() {
		return (
			<div>
				<Metric1 />
				<Metric2 />
				<Metric3 />
			</div>
		);
	}
}

class Metric1 extends Component {
	state = {
		category: 'Work',
		noOfHours: '32hrs',
		noOfHoursLastWeek: 'Last week - 36hrs',
	};
	render() {
		const { category, noOfHours, noOfHoursLastWeek } = this.state;

		return (
			<section>
				<h2>{category}</h2>
				<p>{noOfHours}</p>
				<p>{noOfHoursLastWeek}</p>
			</section>
		);
	}
}

class Metric2 extends Component {
	state = {
		category: 'Play',
		noOfHours: '10hrs',
		noOfHoursLastWeek: 'Last week - 8hrs',
	};
	render() {
		const { category, noOfHours, noOfHoursLastWeek } = this.state;
		return (
			<section>
				<h2>{category}</h2>
				<p>{noOfHours}</p>
				<p>{noOfHoursLastWeek}</p>
			</section>
		);
	}
}

class Metric3 extends Component {
	state = {
		category: 'Study',
		noOfHours: '4hrs',
		noOfHoursLastWeek: 'Last week - 7hrs',
	};
	render() {
		const { category, noOfHours, noOfHoursLastWeek } = this.state;
		return (
			<section>
				<h2>{category}</h2>
				<p>{noOfHours}</p>
				<p>{noOfHoursLastWeek}</p>
			</section>
		);
	}
}
