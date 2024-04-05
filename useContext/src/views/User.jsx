import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function User() {
	const { userInfo } = useContext(AuthContext);
	return (
		<>
			<h1>Home</h1>
			<p>
				{userInfo.name} {userInfo.surname}
			</p>
		</>
	);
}
