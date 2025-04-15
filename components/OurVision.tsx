import Image from "next/image";
import SectionHeader from "./shared/SectionHeader";

const OurVision = () => {
	return (
		<div className="container pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div className="lg:col-span-2 flex items-start justify-center flex-col">
				<SectionHeader isContainer={false} title={"Our Vision"} />
				<p className="text-base mt-4">
					The vision emerging from this approach is to cultivate a
					global community of ethical, empowered leaders who are
					deeply committed to positive change and collective progress.
					It envisions a world where young people are empowered to
					discover their potential, drive personal growth, and become
					catalysts for transformation in their communities and
					beyond. This vision embraces the idea of building ethical
					leadership, instilling in individuals a strong foundation of
					values, morals, and integrity. These leaders prioritize
					empathy, responsibility, and inclusivity in their
					decision-making, fostering trust and collaboration within
					diverse communities. Central to this vision is the
					facilitation of dialogue and collaboration among different
					stakeholders, including students, political leaders, and
					sports champions. Through constructive engagement, these
					individuals come together to address pressing global issues,
					leveraging their collective insights and expertise to
					co-create sustainable solutions. Ultimately, the vision aims
					to drive impactful change by empowering individuals to
					translate their ideas and passions into tangible actions
					that contribute to positive social, environmental, and
					economic outcomes. It fosters a culture of innovation and
					resilience, encouraging creativity and adaptability in
					navigating the complexities of our interconnected world
					while embracing diversity and inclusivity as fundamental
					principles.
				</p>
			</div>
			<div className="lg:col-span-2 flex items-center justify-center">
				<Image
					src={
						"https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744724898/innovation/WhatsApp_Image_2025-04-14_at_7.46.03_PM_isnqmz.jpg"
					}
					alt={"Innovation 3.0 image"}
					width={1000}
					height={1000}
					className="w-full h-full rounded-lg aspect-video object-cover"
				/>
			</div>
		</div>
	);
};

export default OurVision;
