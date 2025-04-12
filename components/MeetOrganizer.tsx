import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";
import Team from "./Team";
import { organizers } from "@/constants";

const MeetOrganizer = () => {
	return (
		<div className="bg-white py-16 relative overflow-hidden">
			<Spotlight />
			<SectionHeader title={"Meet our Organizer"} position="center" />
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
				<Image
					src={
						"https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744308382/innovation/DSC_1065_pp4qio.jpg"
					}
					alt={"John Ogunjide's picture"}
					width={1000}
					height={1000}
					className="w-full h-full aspect-square object-cover rounded-lg"
				/>
				<div className="flex flex-col items-start justify-center">
					<h4 className="text-primary uppercase font-semibold text-xl md:text-2xl">
						John Ogunjide
					</h4>
					<h5 className="text-base text-gray-700 mt-1.5">
						Founder & Convener of Innovation 4.0
					</h5>
					<p className="text-base mt-4">
						John Ogunjide is a visionary leader, entrepreneur, and
						advocate for innovation and personal transformation.
						With a passion for empowering individuals to reach their
						full potential, he founded the Innovation Conference as
						a platform to connect thinkers, creators, and
						change-makers. Under his leadership, the conference has
						grown into one of the most anticipated events, inspiring
						thousands across industries.
					</p>
				</div>
			</div>
			<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
				{organizers.map((organizer, index) => (
					<Team
						key={index}
						image={organizer.image}
						name={organizer.name}
						title={organizer.title}
					/>
				))}
			</div>
		</div>
	);
};

export default MeetOrganizer;
