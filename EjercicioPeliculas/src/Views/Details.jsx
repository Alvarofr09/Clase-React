import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
	const [pelicula, setPelicula] = useState({});
	const { id } = useParams();

	useEffect(() => {
		async function fetchApi() {
			let response = await fetch(
				`http://www.omdbapi.com/?apikey=6bbc4e49&i=${id}`
			);
			let json = await response.json();
			setPelicula(json);
		}
		fetchApi();
	}, [id]);

	return (
		<div className="container">
			<div className="">
				<h1>{pelicula.Title}</h1>
				<img src={pelicula.Poster} alt={pelicula.Title} />
				<p>Director: {pelicula.Director}</p>
				<p>Type: {pelicula.Type} </p>
				<p>Plot: {pelicula.Plot}</p>
				<p>Language: {pelicula.Language}</p>
				<p>Rating: {pelicula.imdbRating}</p>
			</div>
		</div>
	);
}
