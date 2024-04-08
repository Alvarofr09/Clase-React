// Esta es la version que hemos remplazado, que te tienes que importar tanto el uso del contexto como el contexto.
// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";

// Importamos la funcion que nos da el contexto
import { useAuthContext } from "../contexts/AuthContext";
import Counter from "../ejercicios/Counter";
import Theme from "../ejercicios/Theme";

export default function Home() {
	// Esta es la version que hemos remplazado, que tienes que usar tanto el uso del contexto como el contexto.
	// const { userInfo } = useContext(AuthContext);

	// Y aquí en vez de usar el contexto directamente y ponerle el contexto dentro,
	// usamos la funcion que nos usa el cotexto directamente
	const { userInfo } = useAuthContext();
	return (
		<>
			<h1>Home</h1>
			<p>
				{userInfo.name} {userInfo.surname}
			</p>
			<Counter />
			<Theme />
		</>
	);
}
