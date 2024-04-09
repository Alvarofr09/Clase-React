import { useGaleryContext } from "../contexts/GaleryContext";

export default function Gallery() {
	const { currentCategory, images, changeCategory } = useGaleryContext();

	const handleChangeCategory = (category) => {
		changeCategory(category);
	};

	const filteredImages =
		currentCategory === "all"
			? images
			: images.filter((img) => img.category === currentCategory);

	return (
		<>
			<h2>Gallery</h2>

			<div>
				<button onClick={() => handleChangeCategory("all")}>Todas</button>
				<button onClick={() => handleChangeCategory("Goku")}>Goku</button>
				<button onClick={() => handleChangeCategory("Vegeta")}>Vegeta</button>
				<button onClick={() => handleChangeCategory("Broly")}>Broly</button>
			</div>

			<div>
				{filteredImages.map((image) => {
					return (
						<img key={image.id} src={image.url} alt={`Image ${image.id}`} />
					);
				})}
			</div>
		</>
	);
}
