import { useEffect } from "react";
import { useState } from "react";

export default function Hora() {
	const [hora, setHora] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const interval = setInterval(() => {
			setHora(new Date().toLocaleTimeString());
		}, 1000);

		return () => clearInterval(interval);
	}, [hora]);

	return (
		<div>
			<h1>Hora Actual</h1>
			<p>{hora}</p>
		</div>
	);
}
