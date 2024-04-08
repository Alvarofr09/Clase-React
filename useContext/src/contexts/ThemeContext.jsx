import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
	theme: "",
	setTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState("dark");
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useThemeContext() {
	return useContext(ThemeContext);
}
