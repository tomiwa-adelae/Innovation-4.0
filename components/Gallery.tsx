import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import SectionHeader from "./shared/SectionHeader";
import ImageLibrary from "./shared/ImageLibrary";
import { Button } from "./ui/button";
import Link from "next/link";
import CTABox from "./shared/CTABox";

const Gallery = ({
	title,
	description,
	pagination = false,
}: {
	title: string;
	description: string;
	pagination?: boolean;
}) => {
	const images = [
		{ src: "/assets/images/image.png" },
		{ src: "/assets/images/image.png" },
		{ src: "/assets/images/image.png" },
		{ src: "/assets/images/image.png" },
		{ src: "/assets/images/image.png" },
		{ src: "/assets/images/image.png" },
		{ src: "/assets/images/image.png" },
		{ src: "/assets/images/image.png" },
		{ src: "/assets/images/image.png" },
	];
	return (
		<div className="bg-white py-16 relative overflow-hidden">
			<Spotlight />
			<SectionHeader title={title} description={description} />
			<div className="mt-8 container">
				<ImageLibrary images={images} />
				<CTABox
					title={"Want to Be Part of This? Register Now!"}
					slug={"/register"}
					label="Register now"
				/>
			</div>
		</div>
	);
};

export default Gallery;
