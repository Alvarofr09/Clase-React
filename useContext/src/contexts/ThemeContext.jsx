import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
	isDarkMode: false,
	setisDarkMode: () => {},
});

export default function ThemeContextProvider({ children }) {
	const prefersMode = window.matchMedia("(prefers-color-scheme: dark)").matches
		? true
		: false;

	const [isDarkMode, setisDarkMode] = useState(prefersMode);

	const toggleTheme = () => {
		setisDarkMode(!isDarkMode);
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
