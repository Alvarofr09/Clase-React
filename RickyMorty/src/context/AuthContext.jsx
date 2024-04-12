/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({});

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
	const [auth, setAuth] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");

	function login(user) {
		if (user.email === "alvaro@gmail.com" && user.password === "1234") {
			setAuth(user);
		} else {
			setErrorMessage("Error al introducir credenciales");
		}
	}

	function logout() {
		setAuth(null);
	}

	const value = { auth, login, logout, errorMessage };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
