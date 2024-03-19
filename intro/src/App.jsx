import { useState } from "react";

import Saludo from "./components/Saludo";
import Card from "./components/Card";
import Input from "./components/Input";
import Lista from "./components/Lista";
import Button from "./components/Button";
import Animals from "./components/Animals";
import Food from "./components/Food";

import Vegeta from "./assets/Vegeta.jpg";
import goku from "./assets/goku_manga.avif";

import "./App.css";

const characters = [
	{
		id: 1,
		src: goku,
		title: "Goku",
		descripcion: "Esta es una imagen de la pelea entre moro y goku",
		address: { street: "Calle ", number: 123 },
	},
	{
		id: 2,
		src: Vegeta,
		title: "Vegeta",
		descripcion: "Este panel de manga es de cuando vegeta uso el ultraego",
		address: { street: "Calle ", number: 123 },
	},
];

const Students = ["Alvaro", "Pepe", "Pepa"];
const animalsArray = ["Perro", "Gato", "Conejo"];

const users = [
	{
		id: 1,
		name: "Alvaro",
	},
	{
		id: 2,
		name: "Pepe",
	},
	{
		id: 3,
		name: "Pablo",
	},
	{
		id: 4,
		name: "Nacho",
	},
];
function App() {
	// const [count, setCount] = useState(0);

	// function increment() {
	// 	setTimeout(() => setCount((prevValue) => prevValue + 1), 2000);
	// }

	// function addAnimal() {
	// 	setAnimals([...animals, "T-rex"]);
	// }

	return (
		<>
			{/* <Saludo name="Alvaro" /> */}
			{/* <img src={goku} alt="Goku" className="Goku" /> */}
			{/* <p>El valor de count es: {count}</p>
			<button onClick={increment}>Incrementar</button>
			<button onClick={decrement}>Disminuir</button>
			<button onClick={reset}>Resetear</button> */}
			{/* <Saludo name="Pepe" /> */}
			<Animals />
			<br />
			<Food />
			<br />
			{/* <div style={{ display: "flex" }}>
				{characters.map((character) => (
					<Card
						key={character.id}
						src={character.src}
						title={character.title}
						descripcion={character.descripcion}
						address={character.address}
					/>
				))}
			</div>
			<Button name="Alvaro" />
			<Button name="Pepe" /> */}
			{/* <Lista title={"Estudiantes"} items={Students} /> */}
			{/* <Lista title={"Usuarios"} items={users} /> */}

			<h2>Releevant :)</h2>
		</>
	);
}

export default App;
