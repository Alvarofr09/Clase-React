import { useEffect } from "react";

export default function Developer({ developer }) {
	useEffect(() => {
		console.log(developer);
	}, [developer]);

	return <p>{developer.name}</p>;
}
