import goku from "../assets/goku.png";

export default function Card() {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={goku} className="card-img-top" alt="Goku" />
			<div className="card-body">
				<h5 className="card-title">Goku</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Click aquí
				</a>
			</div>
		</div>
	);
}
