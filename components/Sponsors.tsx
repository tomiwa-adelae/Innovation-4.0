import { Spotlight } from "./ui/spotlight-new";
import SectionHeader from "./shared/SectionHeader";
import { Button } from "./ui/button";
import Link from "next/link";

const Sponsors = () => {
	return (
		<div className="bg-white py-16 relative overflow-hidden">
			<Spotlight />
			<SectionHeader title={"Sponsors & Partners"} />
			<div className="container mt-8">
				<div className="bg-blue-900 text-white mt-8 rounded-lg p-8 flex items-center flex-col md:flex-row w-full justify-between gap-4">
					<h5 className="text-base font-medium">
						Interested in Becoming a Sponsor? Join Us!
					</h5>
					<Button
						className="w-full md:w-auto"
						size={"lg"}
						asChild
						variant={"secondary"}
					>
						<Link href="/container">Contact us</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
