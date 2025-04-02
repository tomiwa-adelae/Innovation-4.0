"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ImageLibrary = ({ images }: any) => {
	const [open, setOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleOpen = (index: number) => {
		setCurrentIndex(index);
		setOpen(true);
	};

	return (
		<div>
			<div className="grid grid-cols-3 gap-4">
				{images.map((image: any, index: number) => (
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
						<div className="absolute inset-0 transition-all hover:bg-black/20 cursor-pointer" />
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
