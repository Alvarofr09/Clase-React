import { useState, useEffect } from "react";

export default function Scroll() {
	const [currentScroll, setCurrentScroll] = useState(window.scrollY);

	useEffect(() => {
		function onScroll() {
			console.log("onScroll");
			setCurrentScroll(window.scrollY);
		}

		document.addEventListener("scroll", onScroll);

		return function cleanUp() {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div
			style={{
				color: "black",
				position: "fixed",
				background: "red",
				width: "100%",
				bottom: 0,
			}}
		>
			Scroll: {currentScroll}
		</div>
	);
}
