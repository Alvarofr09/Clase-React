import { useState } from "react";

export default function List({ items }) {
	const [isCompleted, setIsCompleted] = useState("false");

	function handleClick(e) {
		setIsCompleted(!isCompleted);
	}
	return (
		<>
			<ul>
				{items.map((item) =>
					typeof item === "object" ? (
						<li
							className={isCompleted ? "completed" : null}
							onClick={handleClick}
							key={item.id}
						>
							{item.name}
						</li>
					) : (
						<li
							className={isCompleted ? "completed" : null}
							onClick={handleClick}
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
