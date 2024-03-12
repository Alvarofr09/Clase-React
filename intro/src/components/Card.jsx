import goku from "../assets/goku.png";

export default function Card(props) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.src} className="card-img-top" alt={props.title} />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.descripcion}</p>
				<a href="#" className="btn btn-primary">
					Ver detalles
				</a>
			</div>
		</div>
	);
}
