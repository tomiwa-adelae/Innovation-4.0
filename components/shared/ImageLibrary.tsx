"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ImageLibrary = ({
	images,
	number = 3,
}: {
	images: any;
	number?: number;
}) => {
	const [open, setOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleOpen = (index: number) => {
		setCurrentIndex(index);
		setOpen(true);
	};

	return (
		<div>
			<div
				className={`grid ${
					number === 2
						? "grid-cols-1 md:grid-cols-2"
						: number === 3
						? "grid-cols-2 lg:grid-cols-3"
						: "grid-cols-4"
				} gap-0.5 sm:gap-2 lg:gap-4`}
			>
				{images?.map((image: any, index: number) => (
					<div
						className="relative"
						key={index}
						onClick={() => handleOpen(index)}
					>
						<Image
							src={image.src}
							width={1000}
							height={1000}
							alt={`Image ${index + 1}`}
							className="cursor-pointer rounded-lg aspect-square object-cover"
						/>
						<div className="absolute inset-0 transition-all hover:bg-black/20 cursor-pointer rounded-lg" />
					</div>
				))}
			</div>
			{open && (
				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={images}
					index={currentIndex}
				/>
			)}
		</div>
	);
};

export default ImageLibrary;
