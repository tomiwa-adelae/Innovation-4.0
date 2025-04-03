import Showcase from "@/components/shared/Showcase";
import { ColourfulText } from "@/components/ui/colourful-text";
import { email } from "@/constants";
import { getContactDetails } from "@/lib/actions/contact.actions";
import { redirect } from "next/navigation";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Message Received | Innovation 4.0",
	description:
		"Thank you for reaching out! Our team will get back to you soon. Stay tuned for updates on Innovation 4.0",
	keywords:
		"message received, inquiry confirmation, event support, john ogunjide, tomiwa, tomiwa adelae, innovation 3.0, innovation 4.0, innovation conference, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University",
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

	const res = await getContactDetails(id);

	if (res.status === 400) redirect("/not-found");

	return (
		<div>
			<Showcase
				headline={
					<>
						Message <ColourfulText text="Received!" />
					</>
				}
				description={`Thank you for reaching out to us! Your message has been successfully submitted, and our team will get back to you as soon as possible. If your inquiry is urgent, feel free to contact us directly at ${email}.`}
				fullScreen={true}
				bgImage="/assets/images/showcase-img.png"
			/>
		</div>
	);
};

export default page;
