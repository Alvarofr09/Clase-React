export default function List({ items }) {
	return (
		<>
			<ul>
				{items.map((item) =>
					typeof item === "object" ? (
						<li key={item.id}>{item.name}</li>
					) : (
						<li key={item}>{item}</li>
					)
				)}
			</ul>
		</>
	);
}
