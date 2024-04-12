import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Personajes() {
	const [personajes, setPersonajes] = useState([]);

	useEffect(function () {
		async function fetchApi() {
			let response = await fetch(`https://rickandmortyapi.com/api/character`);
			let json = await response.json();
			json = json.results;
			setPersonajes(json);
		}
		fetchApi();
	}, []);

	return (
		<div className="container">
			<h1>Rick and Morty</h1>
			<div className="contenedor">
				{personajes.map((character) => {
					return (
						<div key={character.id} className="card">
							<h3>{character.name}</h3>
							<img src={character.image} alt={character.name} width={"30%"} />
							<p>Status: {character.status}</p>
							<Link className="link" to={`/${character.id}`}>
								Ver detalles
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
