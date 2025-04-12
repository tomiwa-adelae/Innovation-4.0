import { Spotlight } from "./ui/spotlight-new";
import SectionHeader from "./shared/SectionHeader";
import { InfiniteMovingSponsors } from "./ui/infinite-moving-sponsors";
import CTABox from "./shared/CTABox";
import { sponsors } from "@/constants";

const Sponsors = () => {
	return (
		<div className="bg-white py-16 relative overflow-hidden">
			{/* <Spotlight /> */}
			<SectionHeader title={"Sponsors & Partners"} />
			<div className="container mt-8">
				<InfiniteMovingSponsors
					items={sponsors}
					direction="right"
					speed="normal"
				/>

				<CTABox
					title={"Interested in Becoming a Sponsor? Join Us"}
					slug={"/contact"}
					label="Contact us"
				/>
			</div>
		</div>
	);
};

export default Sponsors;
