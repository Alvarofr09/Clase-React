import { useEffect } from "react";
import { useState } from "react";

export default function Modal() {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowModal(false);
		}, 3000);

		return () => clearTimeout(timeout);
	}, [showModal]);

	return (
		<div>
			<h1>Modal</h1>
			<button onClick={() => setShowModal(true)}>Mostrar modal</button>
			<Ventana showModal={showModal} setShowModal={setShowModal} />
		</div>
	);
}

function Ventana({ showModal }) {
	return (
		<div
			style={{
				width: "200px",
				height: "200px",
				backgroundColor: "black",
				color: "white",
				display: showModal ? "flex" : "none",
			}}
		>
			<h1>Ventana</h1>
		</div>
	);
}
