"use server";

import { handleError } from "../utils";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
	api_key: process.env.CLOUDINARY_API_KEY!,
	api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const getImages = async ({
	query,
	limit,
	page,
}: {
	limit?: number;
	page?: number;
	query?: string;
}) => {
	try {
		const { resources } = await cloudinary.search
			.expression(`folder:innovation${query ? ` AND ${query}` : ""}`)
			.sort_by("public_id", "asc")
			.max_results(limit)
			.execute();

		const images = resources.map((res: any) => ({
			src: res.secure_url,
			alt: res.filename,
		}));

		return {
			status: 200,
			data: images,
		};
	} catch (error: any) {
		handleError(error);
		return {
			status: error?.status || 400,
			message:
				error?.message ||
				"Oops! Couldn't get any listings! Try again later.",
		};
	}
};
