import Saludo from "./components/Saludo";
import Releevant from "./components/Releevant";
import goku from "./assets/goku.png";
import "./App.css";

function App() {
	return (
		<>
			<Saludo />
			<img src={goku} alt="Goku" className="Goku" />
			<Saludo />
			<Releevant />
		</>
	);
}

export default App;
