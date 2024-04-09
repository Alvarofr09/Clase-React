import { createContext, useContext, useState } from "react";

import Goku from "../assets/goku.jpg";
import Goku2 from "../assets/goku2.webp";
import Vegeta from "../assets/vegeta.webp";
import Vegeta2 from "../assets/vegeta2.jpg";
import Broly from "../assets/broly.avif";
import Broly2 from "../assets/broly2.webp";

export const GalleryContext = createContext({
	currentCategory: "all",
	images: [],
	setCurrentCategory: () => {},
});

export default function GalleryContextProvider({ children }) {
	const [currentCategory, setCurrentCategory] = useState("all");
	const images = [
		{ id: 1, category: "Goku", url: Goku },
		{ id: 2, category: "Goku", url: Goku2 },
		{ id: 3, category: "Vegeta", url: Vegeta },
		{ id: 4, category: "Vegeta", url: Vegeta2 },
		{ id: 5, category: "Broly", url: Broly },
		{ id: 6, category: "Broly", url: Broly2 },
	];

	const changeCategory = (category) => {
		setCurrentCategory(category);
	};

	return (
		<GalleryContext.Provider
			value={{ currentCategory, images, changeCategory }}
		>
			{children}
		</GalleryContext.Provider>
	);
}

export function useGaleryContext() {
	return useContext(GalleryContext);
}
