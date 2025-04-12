import { Spotlight } from "./ui/spotlight-new";
import SectionHeader from "./shared/SectionHeader";
import ImageLibrary from "./shared/ImageLibrary";

import CTABox from "./shared/CTABox";

const Gallery = async ({
	title,
	description,
	pagination = false,
	images,
}: {
	title: string;
	description: string;
	pagination?: boolean;
	images?: any;
}) => {
	return (
		<div className="bg-white py-16 relative overflow-hidden">
			<Spotlight />
			<SectionHeader title={title} description={description} />
			<div className="mt-8 container">
				<ImageLibrary images={images} />
				<CTABox
					title={"Want to Be Part of This? Register Now!"}
					slug={"/register"}
					label="Register now"
				/>
			</div>
		</div>
	);
};

export default Gallery;
