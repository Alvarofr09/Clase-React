import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Characteres from "./views/Characteres";
import CharacterDetail from "./views/CharacterDetail";
// import CharactersMaterial from "./views/CharactersMaterial";
// import Material from "./views/Material";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Characteres />} />
					{/* <Route path="material" element={<Material />} /> */}
					<Route path="character/:id" element={<CharacterDetail />} />

					{/* <Route path="characters" element={<CharactersMaterial />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
