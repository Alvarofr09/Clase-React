import { useState } from "react";
import "./App.css";
import BasicForm from "./components/BasicForm/BasicForm";

function App() {
	const [view, setView] = useState("basic");

	return (
		<div className="App">
			<nav>
				<h3 onClick={() => setView("basic")} style={{ color: view ?? "basic" }}>
					Basic
				</h3>
				<BasicForm />
				<h3
					onClick={() => setView("advanced")}
					style={{ color: view ?? "basic" }}
				>
					Advanced
				</h3>
			</nav>
		</div>
	);
}

export default App;
