import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
	darkMode: false,
	setDarkMode: () => {},
});

export default function ThemeContextProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => {
		setDarkMode(!darkMode);
	};

	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useThemeContext() {
	return useContext(ThemeContext);
}
