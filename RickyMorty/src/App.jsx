import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./views/Login";

function App() {
	return (
		<>
			<div>App</div>
			<Routes>
				<Route path="/" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
