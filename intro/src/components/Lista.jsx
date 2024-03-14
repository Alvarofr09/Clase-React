export default function Lista({ title, items }) {
	return (
		<>
			<h1>Lista de {title}</h1>
			<ul>
				{items.map((item) => {
					if (typeof item === "object") {
						return <li key={item.id}>{item.name}</li>;
					} else {
						return <li key={item}>{item}</li>;
					}
				})}
			</ul>
		</>
	);
}
