import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Layout() {
	const { auth, Logout } = useAuthContext();

	return (
		<div>
			<nav>
				<h1>Rutas protegidas</h1>
				{auth && (
					<>
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/profile">Profile</Link>
						<button onClick={Logout}>Logout</button>
					</>
				)}
			</nav>

			<main className="app">
				<Outlet />
			</main>
		</div>
	);
}
