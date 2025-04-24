import SectionHeader from "./shared/SectionHeader";
import CTABox from "./shared/CTABox";
import { sponsors } from "@/constants";
import Image from "next/image";

const Sponsors = () => {
	return (
		<div className="bg-white py-8 relative overflow-hidden">
			{/* <Spotlight /> */}
			<SectionHeader title={"Sponsors & Partners"} />
			<div className="container mt-8">
				<div className={`grid grid-cols-2 lg:grid-cols-3 gap-4`}>
					{sponsors?.map((sponsor: any, index: number) => (
						<div
							className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg flex items-center justify-center"
							key={index}
						>
							<Image
								src={sponsor.image}
								width={1000}
								height={1000}
								alt={sponsor.name}
								className="cursor-pointer rounded-lg aspect-auto object-cover"
							/>
						</div>
					))}
				</div>
				<CTABox
					title={"Interested in Becoming a Sponsor? Join Us"}
					slug={"/contact"}
					label="Contact us"
				/>
			</div>
		</div>
	);
};

export default Sponsors;
