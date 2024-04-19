import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Layout() {
	const { auth, logout } = useAuthContext();

	return (
		<div className="flex flex-col  w-screen">
			<nav className="flex w-screen justify-start h-20 bg-black items-center  ">
				<h1 className="text-4xl text-white ">Peliculas</h1>
				{auth && (
					<>
						<Link className=" mx-10 text-white" to="/">
							Buscar Peliculas
						</Link>
						<button className="text-white" onClick={logout}>
							Logout
						</button>
					</>
				)}
			</nav>
			<main className="app">
				<Outlet />
			</main>
		</div>
	);
}
