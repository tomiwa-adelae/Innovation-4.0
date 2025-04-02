import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Button } from "./ui/button";
import Link from "next/link";
import SectionHeader from "./shared/SectionHeader";

export function Testimonials() {
	const testimonials = [
		{
			quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
			name: "Sarah Chen",
			designation: "Product Manager at TechFlow",
			src: "/assets/images/tomiwa-adelae.jpeg",
		},
		{
			quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
			name: "Michael Rodriguez",
			designation: "CTO at InnovateSphere",
			src: "/assets/images/tomiwa-adelae.jpeg",
		},
		{
			quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
			name: "Emily Watson",
			designation: "Operations Director at CloudScale",
			src: "/assets/images/tomiwa-adelae.jpeg",
		},
		{
			quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
			name: "James Kim",
			designation: "Engineering Lead at DataPro",
			src: "/assets/images/tomiwa-adelae.jpeg",
		},
		{
			quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
			name: "Lisa Thompson",
			designation: "VP of Technology at FutureNet",
			src: "/assets/images/tomiwa-adelae.jpeg",
		},
	];
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
