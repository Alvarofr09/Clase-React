import { useState } from "react";

import Input from "./Input";
import Lista from "./Lista";

const animalsArray = ["Perro", "Gato", "Conejo"];

export default function Animals() {
	function handleInput(e) {
		setNewAnimal(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		setAnimals([...animals, newAnimal]);
		setNewAnimal("");
	}

	const [animals, setAnimals] = useState(animalsArray);
	const [newAnimal, setNewAnimal] = useState("");

	return (
		<>
			<Lista title={"Animales"} items={animals} />
			<form onSubmit={onSubmit}>
				<Input
					label="Animal"
					placeholder="Escribe el animal aqui"
					value={newAnimal}
					onChange={handleInput}
				/>
				<button>Añadir Animal</button>
			</form>
		</>
	);
}
