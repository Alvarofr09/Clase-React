export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1>Busca tu pelicula</h1>
			<form action="" className="flex flex-col">
				<input type="text" placeholder="Pelicula" className="border" />
				<button>Buscar</button>
			</form>
		</div>
	);
}
