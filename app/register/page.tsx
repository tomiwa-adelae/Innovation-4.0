import RegistrationForm from "@/components/forms/RegistrationForm";
import FAQs from "@/components/shared/FAQs";
import Showcase from "@/components/shared/Showcase";
import { whatsappNumber } from "@/constants";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Register for Innovation 4.0 | Secure Your Spot Today",
	description:
		"Be part of the most transformative conference of the year! Register now for Innovation 4.0 and unlock your true potential.",
	keywords:
		"event registration, conference sign-up, tech summit, innovation event, business networking, john ogunjide, tomiwa, tomiwa adelae, innovation 3.0, innovation 4.0, innovation conference, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University",
};

const page = () => {
	return (
		<div>
			<Showcase
				headline="Register for Innovation 4.0 Now!"
				description="Join thought leaders, innovators, and change-makers at the most anticipated conference of the year! Secure your spot today and be part of groundbreaking discussions, networking opportunities, and transformative experiences."
				bgImage="/assets/images/showcase-img.png"
				cta={[
					{
						title: "Chat on whatsapp",
						slug: `https://wa.me/${whatsappNumber}`,
					},
				]}
			/>
			<RegistrationForm />
			<FAQs />
		</div>
	);
};

export default page;
