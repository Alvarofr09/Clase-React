/**
 * Importación de Hooks y createContext: Al principio del código,
 * se importan useState, useContext, y createContext de React.
 * Estos son Hooks y funciones esenciales para crear y usar contextos,
 * que permiten compartir estados y funciones entre componentes sin necesidad de
 * prop drilling (pasar props a múltiples niveles de componentes)
 */
import { useState, useContext, createContext } from "react";

/**
 * Creación del contexto AuthContext: Se utiliza createContext para crear un nuevo contexto llamado AuthContext.
 * Este contexto se inicializa con un objeto que contiene dos propiedades:
 * userInfo, un objeto con las propiedades name y surname vacías, y setUserInfo, una función que no hace nada por defecto.
 * Este contexto será utilizado para proporcionar y consumir los datos de autenticación en la aplicación.
 */
export const AuthContext = createContext({
	userInfo: {
		name: "",
		surname: "",
	},
	setUserInfo: () => {},
});

/**
 * Componente AuthContextProvider: Este componente es un proveedor del contexto AuthContext
 * que utiliza el hook useState para manejar el estado userInfo, inicializándolo con un objeto
 * que tiene name como "Pepe" y surname como "Perez". Además, se prepara un objeto value que
 * contiene el estado userInfo y la función setUserInfo para actualizar este estado.
 * Este objeto value se pasa al AuthContext.Provider como prop value, lo que hace que
 * userInfo y setUserInfo estén disponibles en todos los componentes hijos que consuman este contexto.
 */
export default function AuthContextProvider({ children }) {
	const [userInfo, setUserInfo] = useState({ name: "pepe", surname: "perez" });

	const value = { userInfo, setUserInfo };

	/**
	 * Retorno del componente AuthContextProvider: El componente AuthContextProvider
	 * retorna el AuthContext.Provider con el valor de value. Esto envuelve a {children},
	 * que representa cualquier componente hijo que se pase al AuthContextProvider.
	 * Esto significa que cualquier componente hijo tendrá acceso al contexto AuthContext
	 * y podrá consumir los datos de userInfo y la función setUserInfo.
	 */
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook personalizado useAuthContext: Finalmente, se define y exporta un hook personalizado
 * llamado useAuthContext. Este hook utiliza useContext para consumir el contexto
 * AuthContext y devuelve el valor del contexto. Esto simplifica el consumo del contexto
 * AuthContext en cualquier componente, permitiendo un acceso fácil al userInfo
 * y a setUserInfo mediante la llamada de useAuthContext().
 */
export function useAuthContext() {
	return useContext(AuthContext);
}
