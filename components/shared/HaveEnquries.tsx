"use client";
import { email, enquiriesImages, whatsappNumber } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { Spotlight } from "../ui/spotlight-new";

const HaveEnquiry = () => {
	return (
		<div className="bg-white py-16 relative overflow-hidden">
			<Spotlight />
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<div className="flex items-center justify-start mb-8">
						{enquiriesImages.map((enquiry, index) => (
							<Image
								src={enquiry}
								alt={"A nurse"}
								width={1000}
								height={1000}
								className={`w-28 h-28 md:w-36 md:h-36 object-cover rounded-full border-8 hover:scale-105 transition-all border-white ${
									index + 1 !== 1 && "ml-[-25px]"
								}`}
							/>
						))}
					</div>
					<Button className="ml-3" size={"lg"} asChild>
						<a href={`tel:${whatsappNumber}`}>Call us now</a>
					</Button>
				</div>
				<div>
					<h2
						className={`uppercase text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-2 md:mb-3`}
					>
						Have Enquiries?
					</h2>
					<p className="text-base">
						We’re here to help! Whether you have questions about
						registration, partnership opportunities, speaking slots,
						or anything else — don’t hesitate to reach out. Our team
						will respond promptly to ensure you’re well-supported.
					</p>
					<div className="text-sm font-medium mt-8">
						<div className="flex items-center justify-between gap-8">
							<a
								target="_blank"
								href={`https://wa.me/${whatsappNumber}`}
								className="flex items-center justify-center hover:text-primary hover:underline transition-all gap-2"
							>
								<Image
									src={"/assets/icons/whatsapp.svg"}
									alt="Whatsapp Icon"
									width={1000}
									height={1000}
									className="w-5 h-5"
								/>
								<span>{whatsappNumber}</span>
							</a>
							<a
								target="_blank"
								href={`tel:${whatsappNumber}`}
								className="flex items-center justify-center hover:text-primary hover:underline transition-all gap-2"
							>
								<Image
									src={"/assets/icons/call.svg"}
									alt="Call Icon"
									width={1000}
									height={1000}
									className="w-5 h-5"
								/>
								<span>{whatsappNumber}</span>
							</a>
						</div>
						<a
							target="_blank"
							href={`mailto:${email}`}
							className="flex items-center justify-start mt-8 hover:text-primary transition-all gap-2"
						>
							<Image
								src={"/assets/icons/email.svg"}
								alt="Email Icon"
								width={1000}
								height={1000}
								className="w-6 h-6"
							/>
							<span>{email}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HaveEnquiry;
