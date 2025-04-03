import Link from "next/link";
import { Button } from "../ui/button";

const Showcase = ({
	bgImage,
	headline,
	description,
	cta,
	extras,
	fullScreen = false,
}: {
	bgImage: string;
	headline: string | React.ReactNode;
	description: string;
	cta?: any;
	image?: string;
	extras?: string[];
	fullScreen?: boolean;
}) => {
	return (
		<div
			style={{
				backgroundImage: `url(${bgImage})`,
			}}
			className={`flex items-end justify-center bg-no-repeat bg-center bg-cover relative text-white ${
				fullScreen ? "min-h-[100vh]" : "min-h-[85vh]"
			}`}
		>
			<div className={`grid container`}>
				<div className="flex flex-col items-start justify-center py-20 z-50">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
						{headline}
					</h1>
					<p className="text-base text-gray-100 mt-4 mb-6 lg:w-5/6">
						{description}
					</p>
					<div className="flex items-center flex-col w-full md:flex-row justify-start gap-4">
						{cta?.map(
							(
								{
									slug,
									title,
								}: { slug: string; title: string },
								index: number
							) => (
								<Button
									variant={
										index === 0 ? "default" : "secondary"
									}
									key={index}
									asChild
									size="lg"
									className="w-full md:w-auto"
								>
									<Link href={slug}>{title}</Link>
								</Button>
							)
						)}
					</div>
					<div className="flex items-start flex-col w-full justify-start gap-4">
						{extras?.map((extra, index) => (
							<p
								key={index}
								className="italic text-base text-gray-100 mt-4"
							>
								{extra}
							</p>
						))}
					</div>
				</div>
			</div>
			<div className="absolute inset-0 bg-black/70" />
		</div>
	);
};

export default Showcase;
