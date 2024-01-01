import React, { Component } from 'react';

export default class ComponentWithState extends Component {
	state = {
		name: 'Anna',
		lastName: 'Ka',
		nickname: 'Kocia',
		age: 40,
		isAdult: true,
	};

	render() {
		const { age, nickname, name, lastName, isAdult } = this.state;

		return (
			<div>
				<p>
					Name: {name} {lastName}
				</p>
				<p>Age: {age}</p>
				<p>Is Adult?: {isAdult ? 'Yes' : 'No'}</p>
				<p>Nickname: {nickname}</p>
			</div>
		);
	}
}
