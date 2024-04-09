import { useGaleryContext } from "../contexts/GaleryContext";

export default function GalleryNav() {
	const { categories, changeCategory } = useGaleryContext();

	const handleChangeCategory = (category) => {
		changeCategory(category);
	};
	return (
		<div>
			{categories.map((category) => {
				return (
					<button key={category} onClick={() => handleChangeCategory(category)}>
						{category.toUpperCase()}
					</button>
				);
			})}
		</div>
	);
}
