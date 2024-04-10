import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Characteres from "./views/Characteres";
import CharacterDetail from "./views/CharacterDetail";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Characteres />} />

					<Route path="character/:id" element={<CharacterDetail />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
