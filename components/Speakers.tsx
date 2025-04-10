"use client";
import { Spotlight } from "./ui/spotlight-new";
import SectionHeader from "./shared/SectionHeader";
import { Carousel } from "./ui/carousel";
import { speakers } from "@/constants";

const Speakers = () => {
	return (
		<div className="bg-gradient-to-r from-blue-100 to-sky-100 py-16 relative overflow-hidden">
			{/* <Spotlight /> */}
			<SectionHeader
				title={"Innovation 4.0 speakers"}
				position="center"
			/>
			<div className="relative container overflow-x-hidden w-full pb-36 lg:pb-20 h-full pt-14">
				<Carousel slides={speakers} />
			</div>
		</div>
	);
};

export default Speakers;
