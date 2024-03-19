import { useState } from "react";

import Form from "./Form";
import List from "./List";

const todoList = [];

export default function Todo() {
	const [todo, setTodo] = useState(todoList);

	return (
		<>
			<Form
				state={todo}
				setState={setTodo}
				label="Tarea"
				placeholder="Escribe aqui tu tarea"
				buttonText="Añadir Tarea"
			/>
			<List items={todo} />
		</>
	);
}
