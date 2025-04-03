import RegistrationForm from "@/components/forms/RegistrationForm";
import FAQs from "@/components/shared/FAQs";
import Showcase from "@/components/shared/Showcase";
import { whatsappNumber } from "@/constants";

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
