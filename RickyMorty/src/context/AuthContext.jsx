/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({});

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
	let userStorage = JSON.parse(localStorage.getItem("user") || null);

	const [auth, setAuth] = useState(userStorage);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(auth));
	}, [auth]);

	function login(user) {
		if (user.email === "alvaro@gmail.com" && user.password === "1234") {
			setAuth(user);
			setErrorMessage("");
		} else {
			setErrorMessage("Error al introducir credenciales");
		}
	}

	function logout() {
		setAuth(null);
		localStorage.removeItem("user");
	}

	const value = { auth, login, logout, errorMessage };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
