import { useEffect, useState } from "react";
import "./Modal.css";

export default function Modal() {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const body = document.body;
		body.style.overflow = !showModal ? "scroll" : "hidden";
		if (showModal) {
			body.classList.add("modal-overlay");
		} else {
			body.classList.remove("modal-overlay");
		}
	}, [showModal]);

	function toggleModal() {
		setShowModal(!showModal);
	}
	return (
		<div>
			<h1>Modal</h1>
			<button onClick={toggleModal}>Abrir Modal</button>

			<div
				className="modal"
				style={{
					width: "100px",
					height: "100px",
					backgroundColor: "red",
					display: showModal ? "block" : "none",
				}}
			>
				<p>Contenido Modal</p>
				<button onClick={toggleModal}>Cerrar modal</button>
			</div>
		</div>
	);
}
