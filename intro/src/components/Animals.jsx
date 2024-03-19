import { useState } from "react";

import Lista from "./Lista";
import Form from "./Form";

const animalsArray = ["Perro", "Gato", "Conejo"];

export default function Animals() {
	const [animals, setAnimals] = useState(animalsArray);

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
		</>
	);
}
