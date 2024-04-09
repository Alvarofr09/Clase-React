// Importamos la funcion que nos da el contexto
import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useThemeContext } from "../contexts/ThemeContext";
import Counter from "../ejercicios/Counter";
import Theme from "../ejercicios/Theme";
import Gallery from "../ejercicios/Gallery";

export default function Home() {
	const { userInfo } = useAuthContext();
	const { isDarkMode } = useThemeContext();

	useEffect(() => {
		const body = document.body;
		body.className = isDarkMode ? "dark-theme" : "light-theme";
	}, [isDarkMode]);

	return (
		<>
			<h1>Home</h1>
			<p>
				{userInfo.name} {userInfo.surname}
			</p>
			<Counter />
			<Theme />
			<Gallery />
		</>
	);
}
