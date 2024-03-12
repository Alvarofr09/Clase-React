import Saludo from "./components/Saludo";
import goku from "./assets/goku.png";
import Vegeta from "./assets/Vegeta.jpg";
import Card from "./components/Card";
import "./App.css";

function App() {
	return (
		<>
			<Saludo name="Alvaro" />
			{/* <img src={goku} alt="Goku" className="Goku" /> */}
			<Saludo name="Pepe" />
			<Card
				src={goku}
				title="Goku"
				descripcion="Esta es una imagen de goku de GT"
			/>
			<Card
				src={Vegeta}
				title="Vegeta"
				descripcion="Este panel de manga es de cuando vegeta uso el ultraego"
			/>
			<h2>Releevant :)</h2>
		</>
	);
}

export default App;
