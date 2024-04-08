import Home from "./views/Home";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import CountContextProvider from "./contexts/CountContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
	return (
		<ThemeContextProvider>
			<AuthContextProvider>
				<CountContextProvider>
					<Home />
				</CountContextProvider>
			</AuthContextProvider>
		</ThemeContextProvider>
	);
}

export default App;
