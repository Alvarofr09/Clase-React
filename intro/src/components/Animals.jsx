import { useState } from "react";

import Lista from "./Lista";
import Form from "./Form";
import Select from "./Select";

const animalsArray = ["Perro", "Gato", "Conejo"];

export default function Animals() {
	const [animals, setAnimals] = useState(animalsArray);

	function deleteAnimal() {
		// Hacer copia del array
		const newAnimals = [...animals];
		// Excluir el elemento cliclado
		const restAnimals = newAnimals.filter((animal) => animal !== "Conejo");
		// Volver a setear el array modificado
		setAnimals(restAnimals);
	}

	return (
		<>
			<Lista title={"Animales"} items={animals} />
			<Form
				state={animals}
				setState={setAnimals}
				label="Animal"
				placeholder="Escribe tu animal aqui"
				buttonText="Añadir animal"
			/>
			<button onClick={deleteAnimal}>Eliminar Conejo</button>
			<Select>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
			</Select>
		</>
	);
}
