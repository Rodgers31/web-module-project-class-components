import React, { Component } from 'react';

export default class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.input);
	};

	handleClick = (e) => {
		this.setState({
			input: e.target.value,
		});
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' />
				<button onClick={this.handleClick}>Add</button>
			</form>
		);
	}
}
