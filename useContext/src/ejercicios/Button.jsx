import { useCountContext } from "../contexts/CountContext";

export default function Button() {
	const { count, setCount } = useCountContext();
	return <button onClick={() => setCount(count + 1)}>Incrementar</button>;
}
