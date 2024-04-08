import { useThemeContext } from "../contexts/ThemeContext";

import ThemeSwitch from "./ThemeSwitch";

export default function Theme() {
	const { theme } = useThemeContext();

	return (
		<div className={theme === "light" ? "light-theme" : "dark-theme"}>
			<h1>Current theme: {theme}</h1>
			<ThemeSwitch />
		</div>
	);
}
