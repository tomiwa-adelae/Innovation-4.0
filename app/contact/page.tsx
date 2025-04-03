import ContactDetails from "@/components/ContactDetails";
import { ContactForm } from "@/components/forms/ContactForm";
import FAQs from "@/components/shared/FAQs";
import Showcase from "@/components/shared/Showcase";
import { whatsappNumber } from "@/constants";

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
