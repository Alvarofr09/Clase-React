export default function Lista({ title, students }) {
	return (
		<>
			<h1>Lista de {title}</h1>
			<ul>
				{students.map((student) => (
					<li key={student}>{student}</li>
				))}
			</ul>
		</>
	);
}
