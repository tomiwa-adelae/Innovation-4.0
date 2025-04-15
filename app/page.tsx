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

const page = async () => {
	const images = [
		{
			src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744575017/innovation/WhatsApp_Image_2025-04-13_at_8.37.44_PM_1_g5zsrt.jpg",
		},
		{
			src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744575017/innovation/WhatsApp_Image_2025-04-13_at_8.37.47_PM_awa1ja.jpg",
		},
		{
			src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744575016/innovation/WhatsApp_Image_2025-04-13_at_8.37.45_PM_1_piginm.jpg",
		},
		{
			src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744307822/innovation/DSC_1108_uetvgq.jpg",
		},
		{
			src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744725668/innovation/WhatsApp_Image_2025-04-14_at_7.45.51_PM_ucve3u.jpg",
		},
		{
			src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744307877/innovation/DSC_1269_uerpo3.jpg",
		},
		{
			src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744307914/innovation/DSC_1057_hi7z5t.jpg",
		},
		{
			src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744307925/innovation/DSC_1062_q7cxbv.jpg",
		},
		{
			src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744308380/innovation/IMG-20250410-WA0063_xvqpfu.jpg",
		},
		{
			src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744308382/innovation/DSC_1065_pp4qio.jpg",
		},
		{
			src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744308689/innovation/DSC_1383-Joe_Photography_ulwvwy.jpg",
		},
		{
			src: "https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744725767/innovation/WhatsApp_Image_2025-04-14_at_6.30.48_PM_c8cjl9.jpg",
		},
	];

	return (
		<div>
			<Showcase
				headline="Unlocking the Power of You."
				description="Discover the limitless possibilities within you. Join Innovation 4.0, where visionaries, creatives, and pioneers come together to redefine the future."
				bgImage="https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744308706/innovation/DSC_1397-Joe_Photography_zvroub.jpg"
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
				video="https://res.cloudinary.com/dh0rc6p1c/video/upload/v1744459054/innovation/speakers/INNOVATION_4.0_1_ym7cqb.mp4"
			/>
			<Countdown />
			<Innovation4 />
			<Gallery
				title={
					"Snapshots from previous Innovation – Get Ready for 4.0!"
				}
				description={
					"Innovation 4.0 is all about connection, learning, and transforming. Here’s a glimpse of what you can expect—moments of inspiration, collaboration, and innovation from past editions that will shape this year’s event. Your journey to unlocking your full potential starts here"
				}
				images={images}
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
