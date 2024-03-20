import { useState } from "react";

import Input from "./Input";

export default function Form({
	state,
	setState,
	label,
	placeholder,
	buttonText,
}) {
	const [newItem, setNewItem] = useState("");
	function handleInput(e) {
		setNewItem(e.target.value);
	}
	function onSubmit(e) {
		e.preventDefault();
		const newTask = {
			id: new Date().getTime(),
			name: newItem,
			isCompleted: false,
		};
		setState([...state, newTask]);
		setNewItem("");
	}
	return (
		<form onSubmit={onSubmit}>
			<Input
				label={label}
				placeholder={placeholder}
				value={newItem}
				onChange={handleInput}
			/>
			<button>{buttonText}</button>
		</form>
	);
}
