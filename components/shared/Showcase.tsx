import Link from "next/link";
import { Button } from "../ui/button";

const Showcase = ({
	bgImage,
	headline,
	description,
	cta,
	extras,
	fullScreen = false,
	video,
}: {
	bgImage: string;
	headline: string | React.ReactNode;
	description: string;
	cta?: any;
	image?: string;
	extras?: string[];
	fullScreen?: boolean;
	video?: string;
}) => {
	return (
		<div
			style={{
				backgroundImage: !video ? `url(${bgImage})` : "",
			}}
			className={`flex items-end justify-center bg-no-repeat bg-top bg-cover relative text-white ${
				fullScreen ? "min-h-[100vh]" : "min-h-[85vh]"
			}`}
		>
			{video && (
				<video
					autoPlay
					loop
					muted
					playsInline
					className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
				>
					<source src={video} type="video/mp4" />
				</video>
			)}
			<div className={`grid container`}>
				<div className="flex flex-col items-start justify-center py-20 z-50">
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase">
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
			<div className="absolute inset-0 bg-black/40" />
		</div>
	);
};

export default Showcase;
