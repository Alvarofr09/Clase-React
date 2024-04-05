import { useState, useContext, createContext } from "react";

// Aqui se crea el contexto
export const AuthContext = createContext({
	userInfo: "",
	setUserInfo: () => {},
});

// Aqui se crea el provider, que es el que se encarga de proveer el contexto
export default function AuthContextProvider({ children }) {
	const [userInfo, setUserInfo] = useState({ name: "pepe", surname: "perez" });

	const value = { userInfo, setUserInfo };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Para no tener que repetir el importar el useContext y el contexto, hacemos esta funcion
// Que nos la pasa directamente el contexto
export function useAuthContext() {
	return useContext(AuthContext);
}
