import React from 'react';
import './Todo.css';

const Todo = (props) => {
	const handleClick = () => {
		props.toggle(props.item.id);
	};
	return (
		<div
			id='form-st'
			onClick={handleClick}
			className={`item${props.item.done ? ' done' : ''}`}
		>
			<p>{props.item.name}</p>
		</div>
	);
};

export default Todo;
