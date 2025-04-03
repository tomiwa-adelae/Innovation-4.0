import { Button } from "../ui/button";
import Link from "next/link";

const CTABox = ({
	title,
	slug,
	label,
}: {
	label: string;
	title: string;
	slug: string;
}) => {
	return (
		<div className="bg-blue-900 text-white mt-8 rounded-lg p-8 flex items-center flex-col md:flex-row w-full justify-between gap-4">
			<h5 className="text-base font-medium">{title}</h5>
			<Button
				className="w-full md:w-auto"
				size={"lg"}
				asChild
				variant={"secondary"}
			>
				<Link href={slug}>{label}</Link>
			</Button>
		</div>
	);
};

export default CTABox;
