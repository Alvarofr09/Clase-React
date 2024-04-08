import { useEffect, useState } from "react";

export default function Modal() {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const modal = document.querySelector(".modal");
		if (!showModal) {
			modal.style.display = "none";
		} else {
			modal.style.display = "block";
		}
	}, [showModal]);
	return (
		<div>
			<h1>Modal</h1>
			<button onClick={() => setShowModal(true)}>Abrir Modal</button>

			<div
				className="modal"
				style={{ width: "100px", height: "100px", backgroundColor: "red" }}
			>
				<p>Contenido Modal</p>
				<button onClick={() => setShowModal(false)}>Cerrar modal</button>
			</div>
		</div>
	);
}
