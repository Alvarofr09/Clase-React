import { useState } from "react";

import Input from "./Input";

export default function Form({ state, setState }) {
	const [newItem, setNewItem] = useState("");
	function handleInput(e) {
		setNewItem(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		setState([...state, newItem]);
		setNewItem("");
	}

	return (
		<form onSubmit={onSubmit}>
			<Input
				label="Animal"
				placeholder="Escribe el animal aqui"
				value={newItem}
				onChange={handleInput}
			/>
			<button>Añadir Animal</button>
		</form>
	);
}
