"use server";

import { generateAdminEmail, generateUserEmail } from "@/templates";
import { connectToDatabase } from "../database";
import RegisteredUser from "../database/models/registered.user.model";
import { handleError } from "../utils";

import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

export const registerUser = async (user: RegisteredUserParams) => {
	try {
		await connectToDatabase();

		if (!user.name || !user.email)
			return {
				status: 400,
				message: "Oops! Your name & email is required.",
			};

		const registeredUser = await RegisteredUser.create(user);

		if (!registeredUser)
			return {
				status: 400,
				message: "Oops! User is not found.",
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
							Email: registeredUser.email,
							Name: registeredUser.name,
						},
					],
					Subject: `You're Registered for Innovation 4.0 – Unlocking the Power of You!`,
					TextPart: `You're Registered for Innovation 4.0 – Unlocking the Power of You!`,
					HTMLPart: generateUserEmail(registeredUser),
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
					Subject: `New Registration for Innovation 4.0`,
					TextPart: `New Registration for Innovation 4.0`,
					HTMLPart: generateAdminEmail(registeredUser),
				},
			],
		});

		return {
			status: 200,
			registeredUser: JSON.parse(JSON.stringify(registeredUser)),
		};
	} catch (error) {
		handleError(error);
	}
};

export const getRegistrationDetails = async (id: any) => {
	try {
		await connectToDatabase();

		const registeredUser = await RegisteredUser.findById(id);

		if (!registeredUser)
			return {
				status: 400,
				message: "Registration not successful. Try again later.",
			};

		return JSON.parse(JSON.stringify(registeredUser));
	} catch (error: any) {
		return {
			status: error?.status || 400,
			message:
				error?.message ||
				"Oops! RegisteredUser not registered! Try again later.",
		};
	}
};
