import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import SectionHeader from "./shared/SectionHeader";
import ImageLibrary from "./shared/ImageLibrary";
import { Button } from "./ui/button";
import Link from "next/link";

const Gallery = () => {
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
			<SectionHeader
				title={"Snapshots from Innovation 3.0 – Get Ready for 4.0!"}
				description={`Innovation 4.0 is all about connection, learning, and transforming. Here’s a glimpse of what you can expect—moments of inspiration, collaboration, and innovation from past editions that will shape this year’s event. Your journey to unlocking your full potential starts here`}
			/>
			<div className="mt-8 container">
				<ImageLibrary images={images} />
				<div className="bg-blue-900 text-white mt-8 rounded-lg p-8 flex items-center flex-col md:flex-row w-full justify-between gap-4">
					<h5 className="text-base font-medium">
						Want to Be Part of This? Register Now!
					</h5>
					<Button
						className="w-full md:w-auto"
						size={"lg"}
						asChild
						variant={"secondary"}
					>
						<Link href="/register">Register now</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
