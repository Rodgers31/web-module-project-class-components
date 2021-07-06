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
		this.props.addTodo(this.state.input);
	};

	handleChange = (e) => {
		this.setState({
			input: e.target.value,
		});
	};
	render() {
		return (
			<div id='form-st'>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} type='text' name='item' />
					<button>Add</button>
				</form>
			</div>
		);
	}
}
