import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const { login, errorMesagge } = useAuthContext();
	const navigate = useNavigate();

	const [user, setUser] = useState({ email: "", password: "" });

	function handleInput(e) {
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		login(user);
		navigate("/");
	}

	return (
		<div>
			<h1>Login</h1>
			<form action="" onSubmit={handleSubmit}>
				<input
					type="text"
					id="email"
					name="email"
					onChange={handleInput}
					value={user.email}
					placeholder="email"
					required
				/>
				<input
					type="password"
					id="password"
					name="password"
					onChange={handleInput}
					value={user.password}
					placeholder="Password"
					required
				/>
				<p>{errorMesagge}</p>
				<button>Log in</button>
			</form>
		</div>
	);
}
