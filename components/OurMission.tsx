import Image from "next/image";
import SectionHeader from "./shared/SectionHeader";

const OurMission = () => {
	return (
		<div className="container pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative overflow-hidden">
			<div className="lg:col-span-2 flex items-center justify-center order-2">
				<Image
					src={
						"https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744307877/innovation/DSC_1269_uerpo3.jpg"
					}
					alt={"Innovation 3.0 image"}
					width={1000}
					height={1000}
					className="w-full h-full rounded-lg aspect-video object-cover"
				/>
			</div>
			<div className="lg:col-span-3 order-1 md:order-2 flex items-start justify-center flex-col">
				<SectionHeader isContainer={false} title={"Our Mission"} />
				<p className="text-base mt-4">
					At the heart of our mission is the commitment to reproducing
					leaders who are not only equipped with knowledge and skills
					but are also grounded in ethics, values, and morals. Through
					a carefully crafted educational approach, we instill in
					young minds the principles of integrity, empathy, and
					responsibility, essential for effective leadership in
					today's complex world. In parallel, we recognize the
					profound potential within young people to drive positive
					change. That's why we organize annual conferences tailored
					to those eager to explore their potential, make a
					difference, and grow personally and professionally. These
					gatherings serve as dynamic platforms where youth can
					connect, collaborate, and be inspired by each other's
					stories and aspirations. Moreover, our conferences transcend
					individual growth; they serve as catalysts for collective
					action and dialogue on pressing global issues. By bringing
					together students, political leaders, and sports champions,
					we foster diverse perspectives and constructive discourse
					aimed at finding innovative solutions to shared challenges.
					Through debates, discussions, and collaborative initiatives,
					participants emerge not only with a deeper understanding of
					global issues but also with a sense of empowerment to effect
					meaningful change in their communities and beyond.
				</p>
			</div>
		</div>
	);
};

export default OurMission;
