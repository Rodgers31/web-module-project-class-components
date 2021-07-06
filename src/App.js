import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todosList = [
	{
		name: 'clean',
		id: 123,
		done: false,
	},
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todosList: todosList,
		};
	}

	addTodo = (name) => {
		const newTodo = {
			name: name,
			id: Date.now(),
			done: false,
		};
		this.setState({
			...this.state,
			todosList: [...this.state.todosList, newTodo],
		});
	};

	toggle = (id) => {
		this.setState({
			...this.state.todosList,
			todosList: this.state.todosList.map((item) => {
				if (item.id === id) {
					return {
						...item,
						done: !item.done,
					};
				} else {
					return item;
				}
			}),
		});
	};
	clearTodo = () => {
		this.setState({
			...this.state,
			todosList: this.state.todosList.filter((item) => {
				return item.done === false;
			}),
		});
	};
	render() {
		return (
			<div id='cover'>
				<div>
					<h2>Welcome to your Todo App!</h2>
					<TodoForm addTodo={this.addTodo} />
				</div>
				<div>
					<TodoList
						clearTodo={this.clearTodo}
						toggle={this.toggle}
						todosList={this.state.todosList}
					/>
				</div>
			</div>
		);
	}
}

export default App;
