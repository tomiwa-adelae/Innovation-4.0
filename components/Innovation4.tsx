import React from "react";
import SectionHeader from "./shared/SectionHeader";
import { innovationFour } from "@/constants";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Innovation4 = () => {
	return (
		<div className="bg-blue-900 py-16">
			<SectionHeader
				color="white"
				title={"What is Innovation 4.0?"}
				description={`Innovation 4.0 isn’t just a conference. it’s a launchpad for thinkers, creators, and doers. This year, we focus on unlocking the power within you, empowering individuals to drive change, disrupt industries, and create impact. Whether you're an entrepreneur, tech enthusiast, or industry leader, this event is designed to help you harness your full potential.`}
			/>
			<div className="container">
				<div className="grid grid-col-1 md:grid-cols-2 mt-8 gap-8">
					{innovationFour.map(
						({ title, image, name, description }, index) => (
							<div
								key={index}
								className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden rounded-lg"
							>
								<div>
									<Image
										src={image}
										alt={`${name} icon`}
										width={1000}
										height={1000}
										className="aspect-video size-full object-cover"
									/>
								</div>
								<div className="grid pt-4 pb-6 px-4">
									<h4 className="uppercase text-primary font-medium text-base">
										{title}
									</h4>
									<p className="text-base text-muted-foreground">
										{description}
									</p>
								</div>
							</div>
						)
					)}
				</div>
				<div className="flex items-center justify-start mt-8">
					<Button size={"lg"} variant={"secondary"} asChild>
						<Link href="/register">Register now</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Innovation4;
