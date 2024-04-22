import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
	const [search, setSearch] = useState("");
	const [pelicula, setPelicula] = useState({});
	async function handleSubmit(event) {
		event.preventDefault();
		console.log(search);

		let response = await fetch(
			`http://www.omdbapi.com/?apikey=6bbc4e49&t=${search}`
		);
		let json = await response.json();
		setPelicula(json);
		setSearch("");
	}

	function handleChange(event) {
		setSearch(event.target.value);
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<h1>Busca tu pelicula</h1>
			<form action="" className="flex flex-col" onSubmit={handleSubmit}>
				<input
					type="text"
					value={search}
					placeholder="Pelicula"
					className="border"
					onChange={handleChange}
				/>
				<button>Buscar</button>
			</form>

			<div key={pelicula.imdbID}>
				<Link className="link" to={`/movies/${pelicula.imdbID}`}>
					<img src={pelicula.Poster} alt={pelicula.Title} />
					<h3>{pelicula.Title}</h3>
				</Link>
			</div>
		</div>
	);
}
