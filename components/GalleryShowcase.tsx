"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { Button } from "./ui/button";
import Link from "next/link";

export function GalleryShowcase({ images }: any) {
	return (
		<ImagesSlider className="h-screen" images={images}>
			<motion.div
				initial={{
					opacity: 0,
					y: -80,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.6,
				}}
				className="z-50 flex flex-col justify-center items-center"
			>
				<motion.p className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center mb-4">
					Innovation 4.0 <br /> Gallery
				</motion.p>
				<Button asChild size={"lg"}>
					<Link href="/register">
						<span>Join us for the next chapter</span>
					</Link>
				</Button>
			</motion.div>
		</ImagesSlider>
	);
}
