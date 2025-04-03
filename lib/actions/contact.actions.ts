"use server";

import {
	generateAdminContactEmail,
	generateAdminEmail,
	generateUserContactEmail,
	generateUserEmail,
} from "@/templates";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";

import Mailjet from "node-mailjet";
import Contact from "../database/models/contact.model";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

export const contactUs = async (user: ContactParams) => {
	try {
		await connectToDatabase();

		if (!user.name || !user.email || !user.subject)
			return {
				status: 400,
				message: "Oops! Your name, email & subject is required.",
			};

		const contact = await Contact.create(user);

		if (!contact)
			return {
				status: 400,
				message: "Oops! Contact is not found.",
			};

		// **Send Confirmation Email to Student**
		await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: process.env.SENDER_EMAIL_ADDRESS!,
						Name: process.env.COMPANY_NAME!,
					},
					To: [
						{
							Email: contact.email,
							Name: contact.name,
						},
					],
					Subject: `We Received Your Message – Innovation 4.0`,
					TextPart: `We Received Your Message – Innovation 4.0`,
					HTMLPart: generateUserContactEmail(contact),
				},
			],
		});

		// **Send Email to Admin**
		await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: process.env.SENDER_EMAIL_ADDRESS!,
						Name: process.env.COMPANY_NAME!,
					},
					To: [
						{
							Email: process.env.ADMIN_EMAIL_ADDRESS!, // Admin Email
							Name: "Innovation 4.0 Team",
						},
					],
					Subject: ` New Contact Form Submission – Innovation 4.0`,
					TextPart: ` New Contact Form Submission – Innovation 4.0`,
					HTMLPart: generateAdminContactEmail(contact),
				},
			],
		});

		return {
			status: 200,
			contact: JSON.parse(JSON.stringify(contact)),
		};
	} catch (error) {
		handleError(error);
	}
};

export const getContactDetails = async (id: any) => {
	try {
		await connectToDatabase();

		const contact = await Contact.findById(id);

		if (!contact)
			return {
				status: 400,
				message: "Contact details not successful. Try again later.",
			};

		return JSON.parse(JSON.stringify(contact));
	} catch (error: any) {
		return {
			status: error?.status || 400,
			message:
				error?.message || "Oops! Contact not found! Try again later.",
		};
	}
};
