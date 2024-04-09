import Home from "./views/Home";

import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import CountContextProvider from "./contexts/CountContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import GalleryContextProvider from "./contexts/GaleryContext";

function App() {
	return (
		<AuthContextProvider>
			<CountContextProvider>
				<ThemeContextProvider>
					<GalleryContextProvider>
						<Home />
					</GalleryContextProvider>
				</ThemeContextProvider>
			</CountContextProvider>
		</AuthContextProvider>
	);
}

export default App;
