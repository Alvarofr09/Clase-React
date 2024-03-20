import { useState } from "react";

import Button from "./Button";

export default function List({ items, setState }) {
	// Creamos un estado para almacenar los estados de los items
	// const [completedItems, setCompletedItems] = useState({});
	// const [isCompleted, setIsCompleted] = useState(false);

	function handleClick(id) {
		const itemsCopy = [...items];
		const updateItem = itemsCopy.find((item) => item.id === id);
		updateItem.isCompleted = !updateItem.isCompleted;
		console.log(updateItem);

		setState(updateItem);
	}

	// function deleteTask(id) {
	// 	const newItems = items.filter((item) => item.id !== id);
	// 	setIsCompleted(newItems);
	// }

	return (
		<>
			<ul>
				{items.map((item) => (
					<li
						className={item.isCompleted ? "completed" : null}
						onClick={() => handleClick(item.id)}
						key={item.id}
					>
						{item.name}
						{/* <Button text="Delete" onClick={() => deleteTask(item.id)} /> */}
					</li>
				))}
			</ul>
		</>
	);
}
