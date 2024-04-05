// import { useState } from "react";
// import TodoList from "./components/TodoList";
// import Users from "./components/Users";
// import Scroll from "./components/Scroll";
// import Developer from "./components/Developer";
import Hora from "./ejercicios/Hora";
import Teclado from "./ejercicios/Teclado";
import Modal from "./ejercicios/Modal";

/**
 * Ha diferencia de los datos simples, los complejos se guardan en memoria y se guardan por referencia y no por valor
 * Cuando se renderiza el componente de nuevo, la referencia del objeto cambia y es como si fuera uno nuevo
 * Pero sacandolo fuera del componente ya no se crea de nuevo, por lo cual ya no se crea de nuevo
 */
// const developer = {
// 	name: "Alvaro",
// };

import "./App.css";

function App() {
	return (
		<>
			{/* <Developer developer={developer} />
			<button onClick={() => setCount(count + 1)}>Incrementar</button> */}
		</>
	);
}

export default App;
