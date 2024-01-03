import React, { Component } from 'react';

export default class ComponentWithUpdatingState extends Component {
	state = {
		name: 'Anna',
		age: 40,
		isAdult: true,
	};

	handleClick = () => {
		console.log('Updated age');
		this.setState({ age: 20 }); //
	};

	handleClick1 = () => {
		console.log(alert('I did it'));
	};

	handleChange = () => {};

	render() {
		return (
			<div>
				<p>Name: {this.state.name}</p>
				<p>Age: {this.state.age}</p>
				<p>Is Adult?: {this.state.isAdult ? 'yes' : 'no'}</p>

				<button onClick={this.handleClick}>Update age</button>

				<button onClick={this.handleClick1}> You did it? </button>

				<button
					onClick={() => {
						console.log('I did it again');
					}}>
					{' '}
					You did it again?{' '}
				</button>

				<input
					type='text'
					value={this.state.name}
					placeholder='Change name'
					onChange={event => {
						console.log(event.target);
						this.setState({ name: event.target.value });
					}}
				/>
			</div>
		);
	}
}
