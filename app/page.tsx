import Agenda from "@/components/Agenda";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import Innovation4 from "@/components/Innovation4";
import FAQs from "@/components/shared/FAQs";
import HaveEnquiry from "@/components/shared/HaveEnquries";
import Showcase from "@/components/shared/Showcase";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import { Testimonials } from "@/components/Testimonials";
import { getImages } from "@/lib/actions/gallery.actions";

const page = async ({ searchParams }: SearchParamProps) => {
	const page = Number(searchParams?.page) || 1;
	const query = (searchParams?.query as string) || "";

	const images = await getImages({ limit: 9 });

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
			<Gallery
				title={"Snapshots from Innovation 3.0 – Get Ready for 4.0!"}
				description={
					"Innovation 4.0 is all about connection, learning, and transforming. Here’s a glimpse of what you can expect—moments of inspiration, collaboration, and innovation from past editions that will shape this year’s event. Your journey to unlocking your full potential starts here"
				}
				images={images.data}
			/>
			<Speakers />
			<Agenda />
			<Sponsors />
			<Testimonials />
			<HaveEnquiry />
			<FAQs />
		</div>
	);
};

export default page;
