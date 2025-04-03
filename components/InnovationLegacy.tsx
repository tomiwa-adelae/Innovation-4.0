import { LegacyTimeline } from "@/components/ui/legacy-timeline";
import SectionHeader from "./shared/SectionHeader";
import { Spotlight } from "./ui/spotlight-new";
import Image from "next/image";
import ImageLibrary from "./shared/ImageLibrary";
import { innovationLegacies } from "@/constants";

const InnovationLegacy = () => {
	const data = innovationLegacies.map((legacy, index) => ({
		title: legacy.year,
		content: (
			<div>
				<h3 className="text-primary text-xl md:text-2xl font-semibold uppercase mb-4">
					{legacy.theme}
				</h3>
				<p className="text-base text-gray-700 mb-8">{legacy.summary}</p>
				<ImageLibrary images={legacy.images} number={2} />
			</div>
		),
	}));

	return (
		<div className="bg-white py-16 relative overflow-hidden">
			<Spotlight />
			<SectionHeader
				title={"A Legacy of Innovation"}
				description="Over the years, the Innovation Conference has evolved into a leading platform for visionaries, entrepreneurs, and industry leaders to exchange groundbreaking ideas. Each edition has pushed boundaries, inspired change, and empowered individuals to unlock their full potential. Here’s a look at how far we’ve come."
			/>
			<div className="container mt-8">
				<LegacyTimeline data={data} />
			</div>
		</div>
	);
};

export default InnovationLegacy;
