import Gallery from "@/components/Gallery";
import Showcase from "@/components/shared/Showcase";

const page = () => {
	return (
		<div>
			<Showcase
				headline="Innovation 4.0 Gallery"
				description="Step into the world of Innovation! Explore unforgettable moments from past conferences, featuring inspiring speakers, interactive sessions, networking experiences, and the energy of innovators like you."
				bgImage="/assets/images/showcase-img.png"
				cta={[
					{
						title: "Join us for the next chapter",
						slug: "/register",
					},
				]}
			/>
			<Gallery
				title={"Captured Moments – Browse Our Gallery"}
				description="Be part of a groundbreaking experience that will unlock new possibilities for your growth and innovation. Fill out the form below to register for Innovation 4.0 and take the next step toward transforming your future!"
				pagination={true}
			/>
		</div>
	);
};

export default page;
