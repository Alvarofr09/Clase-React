import Saludo from "./components/Saludo";
// import goku from "./assets/goku.png";
import Card from "./components/Card";
import "./App.css";

function App() {
	return (
		<>
			<Saludo />
			<img src={goku} alt="Goku" className="Goku" />
			<Saludo />
			<Card />
			<h2>Releevant :)</h2>
		</>
	);
}

export default App;
