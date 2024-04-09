import { useThemeContext } from "../contexts/ThemeContext";

export default function ThemeSwitch() {
	const { toggleTheme } = useThemeContext();

	return <button onClick={toggleTheme}>Toggle Theme</button>;
}
