import "./App.css";

import Navigation from "./Components/Navigation";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<div className="app">
				<Navigation />
				<Outlet />
			</div>
		</>
	);
}

export default App;
