import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detalles() {
	const [character, setCharacter] = useState({});
	const { id } = useParams();
	let prevId = parseInt(id) - 1;
	if (prevId < 1) {
		prevId = 1;
	}
	let nextId = parseInt(id) + 1;
	console.log(id);

	useEffect(() => {
		async function fetchApi() {
			let response = await fetch(
				`https://rickandmortyapi.com/api/character/${id}`
			);
			let json = await response.json();
			setCharacter(json);
		}
		fetchApi();
	}, [id]);

	return (
		<div className="container">
			<div className="">
				<h1>{character.name}</h1>
				<img src={character.image} alt={character.name} />
				<p>Status: {character.status}</p>
				<p>Species: {character.species}</p>
				<p>Gender: {character.gender}</p>
				<p>Origin: {character.origin?.name} </p>
				<p>Location: {character.location?.name}</p>
			</div>

			<div className="">
				<Link className="link" to={`/${prevId}`}>
					Anterior
				</Link>
				<Link className="link" to={`/${nextId}`}>
					Siguiente
				</Link>
			</div>
		</div>
	);
}
