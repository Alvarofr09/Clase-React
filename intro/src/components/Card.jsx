export default function Card({ src, title, descripcion, address }) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={src} className="card-img-top" alt={title} />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{descripcion}</p>
				<p>
					Address: {address.street}, {address.number}º
				</p>
				<a href="#" className="btn btn-primary">
					Ver detalles
				</a>
			</div>
		</div>
	);
}
