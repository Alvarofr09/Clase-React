import Vegeta from "./assets/Vegeta.jpg";
import goku from "./assets/goku_manga.avif";

import "./App.css";

import Saludo from "./components/Saludo";
import Card from "./components/Card";
import Input from "./components/Input";
import Lista from "./components/Lista";
import Button from "./components/Button";

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
	return (
		<>
			<Saludo name="Alvaro" />
			{/* <img src={goku} alt="Goku" className="Goku" /> */}
			<Saludo name="Pepe" />
			<Input label="Alvaro" placeholder="Escribe tu nombre" value="Alvaro" />
			<div style={{ display: "flex" }}>
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
			<Button name="Alvaro"/>
			<Button name="Pepe"/>
			<Lista title={"Estudiantes"} items={Students} />
			<Lista title={"Usuarios"} items={users} />

			<h2>Releevant :)</h2>
		</>
	);
}

export default App;
