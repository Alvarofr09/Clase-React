import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
