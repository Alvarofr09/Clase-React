import { useEffect } from "react";
import { useState } from "react";

export default function Teclado() {
	const [tecla, setTecla] = useState("");

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			setTecla(e.key);
		});

		return () => {
			document.removeEventListener("keydown", (e) => {
				setTecla(e.key);
			});
		};
	}, []);

	return (
		<div>
			<p>{tecla}</p>
		</div>
	);
}
