import { Link } from "react-router-dom";

export default function Missing() {
	return (
		<div>
			<h1>Page not found</h1>
			<Link to="/">Vuelve a la pagina principal</Link>
		</div>
	);
}
