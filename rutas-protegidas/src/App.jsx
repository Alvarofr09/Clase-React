import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import About from "./views/About";
import Profile from "./views/Profile";
import Missing from "./views/Missing";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

function App() {
	return (
		<Routes>
			{/*Public Routes*/}
			<Route path="/" element={<Layout />}>
				<Route path="/login" element={<Login />} />

				{/*Protected Routes*/}
				<Route element={<RequireAuth />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/profile" element={<Profile />} />
				</Route>

				{/*Missing Route*/}
				<Route path="*" element={<Missing />} />
			</Route>
		</Routes>
	);
}

export default App;
