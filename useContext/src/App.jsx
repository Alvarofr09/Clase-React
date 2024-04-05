import Home from "./views/Home";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
	return (
		<AuthContextProvider>
			<Home />
		</AuthContextProvider>
	);
}

export default App;
