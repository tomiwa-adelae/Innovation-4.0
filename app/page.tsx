import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import Innovation4 from "@/components/Innovation4";
import FAQs from "@/components/shared/FAQs";
import HaveEnquiry from "@/components/shared/HaveEnquries";
import Showcase from "@/components/shared/Showcase";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import { Testimonials } from "@/components/Testimonials";

const page = () => {
	return (
		<div>
			<Showcase
				headline="Unlocking the Power of You."
				description="Discover the limitless possibilities within you. Join Innovation 4.0, where visionaries, creatives, and pioneers come together to redefine the future."
				bgImage="/assets/images/showcase-img.png"
				cta={[
					{ title: "Register", slug: "/register" },
					{
						title: "Explore the event",
						slug: `#`,
					},
				]}
				extras={[
					"Over 2,000 attendees | 25+ speakers | 4+ conferences",
				]}
			/>
			<Countdown />
			<Innovation4 />
			<Gallery />
			<Speakers />
			<Sponsors />
			<Testimonials />
			<HaveEnquiry />
			<FAQs />
		</div>
	);
};

export default page;
