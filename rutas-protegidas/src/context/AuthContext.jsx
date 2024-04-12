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

	function Login(user) {
		if (user.email === "alvaro@gmail.com" && user.password === "1234") {
			setAuth(user);
		} else {
			setErrorMessage("Error al introducir credenciales");
		}
	}

	function Logout() {
		setAuth(null);
	}

	const value = { auth, Login, Logout, errorMessage };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
