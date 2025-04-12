import Showcase from "@/components/shared/Showcase";
import { ColourfulText } from "@/components/ui/colourful-text";
import { getRegistrationDetails } from "@/lib/actions/registered.user.actions";
import { redirect } from "next/navigation";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Registration Successful | Innovation 4.0",
	description:
		"Congratulations! Your spot at Innovation 4.0 is secured. Get ready for an unforgettable experience in innovation, leadership, and business growth.",
	keywords:
		"registration complete, success page, event confirmation, innovation summit, john ogunjide, tomiwa, tomiwa adelae, innovation 3.0, innovation 4.0, innovation conference, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University",
};

interface PageProps {
	searchParams: { id?: string };
}

const page = async ({ searchParams }: PageProps) => {
	const id = searchParams?.id; // ✅ Extract 'id' from searchParams

	if (!id) {
		return (
			<p className="text-center text-red-500">Invalid registration ID</p>
		);
	}

	const res = await getRegistrationDetails(id);

	if (res.status === 400) redirect("/not-found");

	return (
		<div>
			<Showcase
				headline={
					<>
						You're In! Registration{" "}
						<ColourfulText text="Successful!" />
					</>
				}
				description={
					"Congratulations! You have successfully registered for Innovation 4.0. Get ready for an inspiring experience filled with groundbreaking ideas, networking, and opportunities to unlock the power of YOU."
				}
				fullScreen={true}
				bgImage="https://res.cloudinary.com/dh0rc6p1c/image/upload/v1744308706/innovation/DSC_1397-Joe_Photography_zvroub.jpg"
			/>
		</div>
	);
};

export default page;
