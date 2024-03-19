import { useState } from "react";

import Lista from "./Lista";
import Form from "./Form";

const foodList = ["arroz", "pollo", "pescado", "carne"];

export default function Food() {
	const [food, setFood] = useState(foodList);

	return (
		<>
			<Lista title="Comida" items={food} />
			<Form
				state={food}
				setState={setFood}
				label="Comida"
				placeholder="Escribe tu comida aqui"
				buttonText="Añadir comida"
			/>
		</>
	);
}
