import SectionHeader from "./SectionHeader";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";
import { Spotlight } from "../ui/spotlight-new";
import CTABox from "./CTABox";

const FAQs = () => {
	return (
		<div className="bg-gray-50 py-16 relative overflow-hidden">
			{/* <Spotlight /> */}
			<SectionHeader title={"Got Questions? We've Got Answers!"} />
			<div className="container mt-4">
				<Accordion type="single" collapsible className="w-full">
					{faqs.map(({ question, answer }, index) => (
						<AccordionItem value={`${index}`} key={index}>
							<AccordionTrigger>{question}</AccordionTrigger>
							<AccordionContent>{answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
				<CTABox
					title="Need Help? Contact Us!"
					label="Contact us"
					slug="/contact"
				/>
			</div>
		</div>
	);
};

export default FAQs;
