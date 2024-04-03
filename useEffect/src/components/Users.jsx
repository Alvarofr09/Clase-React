import { useState, useEffect } from "react";

export default function Users() {
	const [users, setUsers] = useState(null);
	const [count, setCount] = useState(0);

	useEffect(() => {
		async function fetchUsers() {
			const response = await fetch("https://reqres.in/api/users");
			const users = await response.json();
			setUsers(users);
		}
		console.log("Render del useEffect");
		fetchUsers();
	}, []);

	function increment() {
		setCount(count + 1);
	}

	return (
		<div>
			{users ? (
				users.data.map((user) => <p key={user.id}>{user.first_name}</p>)
			) : (
				<p>Loading...</p>
			)}
			<p>El valor de count es: {count}</p>
			<button onClick={increment}>Incrementar</button>
		</div>
	);
}
