import { useState } from "react";

import Button from "./Button";

export default function List({ items, setState }) {
	function handleClick(id) {
		const updatedItems = items.map((item) => {
			if (item.id === id) {
				return {
					...item,
					isCompleted: !item.isCompleted,
				};
			}
			return item;
		});

		setState(updatedItems);
	}

	function deleteTask(id, e) {
		e.stopPropagation();
		const newItems = items.filter((item) => item.id !== id);
		setState(newItems);
	}

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
						<Button text="Delete" onClick={(e) => deleteTask(item.id, e)} />
					</li>
				))}
			</ul>
		</>
	);
}
