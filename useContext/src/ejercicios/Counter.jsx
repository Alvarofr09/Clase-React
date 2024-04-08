import { useCountContext } from "../contexts/CountContext";
import Button from "./Button";

export default function Counter() {
	const { count } = useCountContext();

	return (
		<>
			<h1>Contador: {count}</h1>
			<br />
			<Button />
		</>
	);
}
