import Gallery from "@/components/Gallery";
import Showcase from "@/components/shared/Showcase";
import { getImages } from "@/lib/actions/gallery.actions";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Innovation 4.0 Gallery | Experience the Moments",
	description:
		"Relive the excitement of past Innovation conferences through our photo and video gallery.",
	keywords:
		" event photos, past events, conference highlights, networking moments, business growth, conference, startup, future trends, john ogunjide, tomiwa, tomiwa adelae, innovation 3.0, innovation 4.0, innovation conference, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University",
};

const page = async ({ searchParams }: SearchParamProps) => {
	const page = Number(searchParams?.page) || 1;
	const query = (searchParams?.query as string) || "";

	const images = await getImages({ limit: 30 });

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
				images={images.data}
			/>
		</div>
	);
};

export default page;
