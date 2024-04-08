import { useThemeContext } from "../contexts/ThemeContext";

export default function ThemeSwitch() {
	const { theme, setTheme } = useThemeContext();
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return <button onClick={toggleTheme}>Toggle Theme</button>;
}
