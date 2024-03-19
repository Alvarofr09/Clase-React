import { useState } from "react";

export default function List({ items }) {
	// Creamos un estado para almacenar los estados de los items
	const [completedItems, setCompletedItems] = useState({});

	// Función para manejar el click a un ítem
	function handleClick(id) {
		// Actualizamos el estado de completado para el item correspondiente
		setCompletedItems((prevCompletedItems) => ({
			...prevCompletedItems,
			[id]: !prevCompletedItems[id], // Invertimos el estado de completado
		}));
	}
	return (
		<>
			<ul>
				{items.map((item) =>
					typeof item === "object" ? (
						<li
							className={completedItems[item.id] ? "completed" : null}
							onClick={() => handleClick(item.id)}
							key={item.id}
						>
							{item.name}
						</li>
					) : (
						<li
							className={completedItems[item] ? "completed" : null}
							onClick={() => handleClick(item)}
							key={item}
						>
							{item}
						</li>
					)
				)}
			</ul>
		</>
	);
}
