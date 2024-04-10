import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Characteres() {
	const [characteres, setCharacteres] = useState([]);

	useEffect(function () {
		async function fetchApi() {
			let response = await fetch(`https://rickandmortyapi.com/api/character`);
			let json = await response.json();
			json = json.results;
			setCharacteres(json);
		}
		fetchApi();
	}, []);
	return (
		<div className="container">
			<h1>Rick and Morty</h1>
			<div className="contenedor">
				{characteres.map((character) => {
					return (
						<div key={character.id} className="card">
							<h3>{character.name}</h3>
							<img src={character.image} alt={character.name} width={"30%"} />
							<p>Status: {character.status}</p>
							<Link className="link" to={`character/${character.id}`}>
								Ver detalles
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
