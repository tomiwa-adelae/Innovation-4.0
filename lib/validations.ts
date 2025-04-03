import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const ContactFormSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z
		.string({ required_error: "Email is required." })
		.email("Invalid email address."),
	phone: z.string().refine(isValidPhoneNumber, {
		message: "Invalid phone number",
	}),
	subject: z.string({
		required_error: "Subject is required.",
	}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
});

export const RegistrationFormSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z
		.string({ required_error: "Email is required." })
		.email("Invalid email address."),
	phone: z.string().refine(isValidPhoneNumber, {
		message: "Invalid phone number",
	}),
	hearAboutUs: z.string().optional(),
	additionalNotes: z.string().optional(),
	institution: z.string().optional(),
	organization: z.string().optional(),
});
