import Showcase from "@/components/shared/Showcase";
import { ColourfulText } from "@/components/ui/colourful-text";
import { getRegistrationDetails } from "@/lib/actions/registered.user.actions";
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
				bgImage="/assets/images/showcase-img.png"
			/>
		</div>
	);
};

export default page;
