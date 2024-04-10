import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
	isDarkMode: false,
	setisDarkMode: () => {},
});

export default function ThemeContextProvider({ children }) {
	const localTheme = localStorage.getItem("isDarkMode");
	console.log(localTheme);
	const prefersMode = window.matchMedia("(prefers-color-scheme: dark)").matches
		? true
		: false;

	const [isDarkMode, setisDarkMode] = useState(prefersMode);

	// if (localTheme) {
	// 	setisDarkMode(localTheme);
	// } else {
	// 	setisDarkMode(prefersMode);
	// }

	const toggleTheme = () => {
		setisDarkMode(!isDarkMode);
		localStorage.setItem("isDarkMode", !isDarkMode);
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, setisDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useThemeContext() {
	return useContext(ThemeContext);
}
