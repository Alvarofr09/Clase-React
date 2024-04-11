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

export default function Characteres() {
	const [characteres, setCharacteres] = useState([]);

	useEffect(function () {
		async function fetchApi() {
			let response = await fetch(`https://rickandmortyapi.com/api/character`);
			let json = await response.json();
			json = json.results;
			setCharacteres(json);
			console.log(json);
		}
		fetchApi();
	}, []);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<h1>Rick and Morty</h1>
			<Grid spacing={2}>
				{characteres.map((character) => {
					return (
						<Grid item xs={6} md={4} key={character.id}>
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
