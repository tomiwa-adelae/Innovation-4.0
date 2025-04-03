import ContactDetails from "@/components/ContactDetails";
import { ContactForm } from "@/components/forms/ContactForm";
import FAQs from "@/components/shared/FAQs";
import Showcase from "@/components/shared/Showcase";
import { whatsappNumber } from "@/constants";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Contact Us | Innovation 4.0 Support",
	description:
		"Have questions? Reach out to the Innovation 4.0 team for inquiries, sponsorships, or partnership opportunities.",
	keywords:
		"contact us, event inquiry, partnership, sponsorship, support, innovation conference, leadership, digital transformation, entrepreneurship, leadership, technology, networking, business growth, conference, startup, future trends, john ogunjide, tomiwa, tomiwa adelae, innovation 3.0, innovation 4.0, innovation conference, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University",
};

const page = () => {
	return (
		<div>
			<Showcase
				headline="Get in Touch "
				description="Have questions about Innovation 4.0? Interested in sponsorships, speaking opportunities, or partnerships? Reach out to us, and we’ll get back to you as soon as possible!"
				bgImage="/assets/images/showcase-img.png"
				cta={[
					{
						title: "Chat on whatsapp",
						slug: `https://wa.me/${whatsappNumber}`,
					},
				]}
			/>
			<ContactDetails />
			<ContactForm />
			<FAQs />
		</div>
	);
};

export default page;
