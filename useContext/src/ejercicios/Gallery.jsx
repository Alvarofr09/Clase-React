import { useGaleryContext } from "../contexts/GaleryContext";

import GalleryNav from "./GalleryNav";

export default function Gallery() {
	const { currentCategory, images } = useGaleryContext();

	const filteredImages =
		currentCategory === "all"
			? images
			: images.filter((img) => img.category === currentCategory);

	return (
		<>
			<h2>Gallery</h2>

			<GalleryNav />

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
