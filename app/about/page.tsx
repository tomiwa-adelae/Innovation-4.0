import InnovationLegacy from "@/components/InnovationLegacy";
import MeetOrganizer from "@/components/MeetOrganizer";
import OurMission from "@/components/OurMission";
import OurVision from "@/components/OurVision";
import Showcase from "@/components/shared/Showcase";
import { Spotlight } from "@/components/ui/spotlight-new";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "About Innovation 4.0 | Unlocking the Power of You",
	description:
		"Learn about the vision, mission, and impact of Innovation 4.0. Discover how we empower individuals and businesses to achieve greatness through innovation.",
	keywords:
		"about innovation 4.0, innovation conference, about us, mission, vision, leadership, digital transformation, entrepreneurship, leadership, technology, networking, business growth, conference, startup, future trends, john ogunjide, tomiwa, tomiwa adelae, innovation 3.0, innovation 4.0, innovation conference, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University",
};

const page = () => {
	return (
		<div>
			<Showcase
				headline="About Innovation 4.0"
				description="Innovation 4.0 is more than a conference but a movement. Designed to ignite creativity, inspire action, and empower individuals to harness their full potential, this year's theme focuses on unlocking the power within YOU. Join thought leaders, innovators, and changemakers for an unforgettable experience."
				bgImage="/assets/images/showcase-img.png"
				cta={[{ title: "Register", slug: "/register" }]}
			/>
			<div className="relative overflow-hidden">
				<Spotlight />
				<OurMission />
				<OurVision />
			</div>
			<MeetOrganizer />
			<InnovationLegacy />
		</div>
	);
};

export default page;
