import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Button } from "./ui/button";
import Link from "next/link";
import SectionHeader from "./shared/SectionHeader";
import { testimonials } from "@/constants";

export function Testimonials() {
	return (
		<div className="bg-white py-16">
			<SectionHeader title={"Hear what people are saying"} />
			<div className="container">
				<AnimatedTestimonials testimonials={testimonials} />
				{/* <Button className="mt-10" asChild size={"lg"}>
					<Link href="/register">Register today</Link>
				</Button> */}
			</div>
		</div>
	);
}
