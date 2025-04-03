import { contactDetails, socialLinks } from "@/constants";
import Image from "next/image";
import SectionHeader from "./shared/SectionHeader";
import { Spotlight } from "./ui/spotlight-new";

const ContactDetails = () => {
	return (
		<div className="py-16 bg-gray-100 relative overflow-hidden">
			<Spotlight />
			<SectionHeader title="Reach us anytime" position="center" />
			<div className="container">
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{contactDetails.map(
						({ icon, details, title, name }, index) => (
							<div
								key={index}
								className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white px-4 py-8 rounded-lg group"
							>
								<Image
									src={icon}
									alt={`${name} Icon`}
									width={1000}
									height={1000}
									className="w-12 h-12 mt-10"
								/>
								<h4 className="uppercase text-primary font-semibold text-base leading-loose mt-8">
									{title}
								</h4>
								<div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-0">
									{details.map((detail, idx) => (
										<a
											href={
												index + 1 === 2
													? `tel:${detail}`
													: index + 1 === 3
													? `mailto:${detail}`
													: "#"
											}
											key={idx}
											className="group-hover:text-primary transition-all text-sm font-medium leading-loose text-gray-900 mt-0.5 break-words"
										>
											{detail}
										</a>
									))}
								</div>
							</div>
						)
					)}
					<div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white px-4 py-8 rounded-lg flex flex-row md:flex-col items-start justify-center gap-6">
						{socialLinks.map(({ icon, name, slug }, index) => (
							<a
								href={slug}
								target="_blank"
								key={index}
								className="flex items-center justify-start gap-4 group"
							>
								<Image
									src={icon}
									alt={`${name} icon`}
									width={1000}
									height={1000}
									className="w-[20px] h-[20px]"
								/>
								<p className="text-sm uppercase font-medium hover:text-primary transition-all">
									{name}
								</p>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
