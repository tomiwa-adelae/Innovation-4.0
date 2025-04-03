import InnovationLegacy from "@/components/InnovationLegacy";
import MeetOrganizer from "@/components/MeetOrganizer";
import OurMission from "@/components/OurMission";
import OurVision from "@/components/OurVision";
import Showcase from "@/components/shared/Showcase";
import { Spotlight } from "@/components/ui/spotlight-new";

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
