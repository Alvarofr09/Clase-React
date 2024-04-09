import Home from "./views/Home";

import "./App.css";
// import AuthContextProvider from "./contexts/AuthContext";
// import CountContextProvider from "./contexts/CountContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
	return (
		<ThemeContextProvider>
			<Home />
		</ThemeContextProvider>
	);
}

export default App;
