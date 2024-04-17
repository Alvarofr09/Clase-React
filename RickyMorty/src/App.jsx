import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Personajes from "./views/Personajes";
import Detalles from "./views/Detalles";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="login" element={<Login />} />

					<Route element={<RequireAuth />}>
						<Route path="/" element={<Personajes />} />
						<Route path="/:id" element={<Detalles />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
