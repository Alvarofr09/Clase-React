import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function Material() {
	const [personaje, setpersonaje] = useState([]);

	useEffect(function () {
		async function fetchApi() {
			let response = await fetch(`https://rickandmortyapi.com/api/character`);
			let json = await response.json();
			json = json.results;
			setpersonaje(json);
			console.log(json);
		}
		fetchApi();
	}, []);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<h1>Rick and Morty</h1>
			<Grid spacing={2}>
				{personaje.map((character) => {
					return (
						<Grid item xs={4} md={3} key={character.id}>
							<Item>
								<h3>{character.name}</h3>
								<img src={character.image} alt={character.name} width={"30%"} />
								<p>Status: {character.status}</p>
								<Link className="link" to={`character/${character.id}`}>
									Ver detalles
								</Link>
							</Item>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}
