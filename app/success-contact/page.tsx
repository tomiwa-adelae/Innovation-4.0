import Showcase from "@/components/shared/Showcase";
import { ColourfulText } from "@/components/ui/colourful-text";
import { email } from "@/constants";
import { getContactDetails } from "@/lib/actions/contact.actions";
import { redirect } from "next/navigation";

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
