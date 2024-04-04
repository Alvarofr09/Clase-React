import { useEffect, useState } from "react";
import "./App.css";

const users = [
	{
		id: 1,
		name: "Pepe",
		score: 5,
	},
	{
		id: 2,
		name: "Paco",
		score: 3,
	},
];

export default function App() {
	const [currentUser, setCurrentUser] = useState(users[0]);

	function onSelectUser(user) {
		setCurrentUser(user);
	}

	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<ul>
				{users.map((u) => (
					<li onClick={() => onSelectUser(u)} key={u.id}>
						{u.name}
					</li>
				))}
			</ul>
			<h2>
				Usuario seleccionado: {currentUser.name} {currentUser.score}
			</h2>
			<Score score={currentUser.score} />
		</div>
	);
}

function Score({ score }) {
	const [stars, setStars] = useState(score);

	useEffect(() => {
		setStars(score);
	}, [score]);

	function handleSubmit() {
		alert(stars);
	}

	function handleChange(event) {
		setStars(event.target.value);
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={stars} onChange={handleChange} />
			<button type="submit">Enviar</button>
			<p>{score}</p>
		</form>
	);
}
