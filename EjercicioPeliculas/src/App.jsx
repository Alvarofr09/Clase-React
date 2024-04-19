import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Login from "./Views/Login";
import RequireAuth from "./Components/RequireAuth";
import Home from "./Views/Home";
import Movie from "./Views/Movie";
import Details from "./Views/Details";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="login" element={<Login />} />

					<Route element={<RequireAuth />}>
						<Route path="/" element={<Home />} />
						<Route path="/movies" element={<Movie />} />
						<Route path="/movies/:id" element={<Details />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
