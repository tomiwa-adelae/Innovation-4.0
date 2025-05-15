"use server";

import { generateAdminEmail, generateUserEmail } from "@/templates";
import { connectToDatabase } from "../database";
import RegisteredUser from "../database/models/registered.user.model";
import { handleError } from "../utils";

import Mailjet from "node-mailjet";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

export const getAttendances = async ({ query }: { query: string }) => {
	try {
		await connectToDatabase();

		const keyword = query
			? {
					$or: [
						{
							name: {
								$regex: query,
								$options: "i",
							},
						},
						{
							email: {
								$regex: query,
								$options: "i",
							},
						},
						{
							phoneNumber: {
								$regex: query,
								$options: "i",
							},
						},
						{
							institution: {
								$regex: query,
								$options: "i",
							},
						},
						{
							organization: {
								$regex: query,
								$options: "i",
							},
						},
					],
			  }
			: {};

		const attendances = await RegisteredUser.find({
			...keyword,
		}).sort({
			name: 1,
		});

		return {
			status: 200,
			attendances: JSON.parse(JSON.stringify(attendances)),
		};
	} catch (error) {
		handleError(error);
	}
};

export const markAttendance = async (id: string) => {
	try {
		await connectToDatabase();

		const attendance = await RegisteredUser.findById(id);

		if (!attendance)
			return {
				status: 400,
				message: "Oops! User not found.",
			};

		attendance.markAttendance = true;

		await attendance.save();

		revalidatePath("/admin/attendance");

		return { status: 200 };
	} catch (error) {
		handleError(error);
	}
};

export const AddAttendance = async (user: AddAttendanceParams) => {
	try {
		await connectToDatabase();

		if (!user.name)
			return {
				status: 400,
				message: "Oops! Your name is required.",
			};

		const userExist = await RegisteredUser.findOne({ name: user.name });

		if (userExist)
			return {
				status: 400,
				message:
					"Oops! You have already registered with this email. Please search for name and mark as attended.",
			};

		const newUser = {
			name: user.name,
			email: user.email || uuidv4(),
			phoneNumber: user.phoneNumber || uuidv4(),
			additionalNotes: user.additionalNotes,
			institution: user.institution,
			hearAboutUs: user.hearAboutUs,
			organization: user.organization,
			markAttendance: true,
		};

		const registeredUser = await RegisteredUser.create(newUser);

		if (!registeredUser)
			return {
				status: 400,
				message: "Oops! User is not found.",
			};

		return {
			status: 200,
			attendance: JSON.parse(JSON.stringify(registeredUser)),
			message: "You have been verified. Please enjoy the conference",
		};
	} catch (error) {
		handleError(error);
	}
};

export const registerUser = async (user: RegisteredUserParams) => {
	try {
		await connectToDatabase();

		if (!user.name || !user.email)
			return {
				status: 400,
				message: "Oops! Your name & email is required.",
			};

		const userExist = await RegisteredUser.findOne({ email: user.email });

		if (userExist)
			return {
				status: 400,
				message:
					"Oops! You have already registered with this email. Please wait till the 16th of May and enjoy the conference.",
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
			message:
				"You have been successfully registered. Please enjoy the conference",
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
