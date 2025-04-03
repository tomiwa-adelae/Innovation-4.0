import { Document, Schema, model, models } from "mongoose";

// Define a TypeScript interface for type safety
export interface Contact extends Document {
	name: string;
	email: string;
	phoneNumber: string;
	subject: string;
	message?: string;
}

// Define the Mongoose Schema
const ContactSchema = new Schema<Contact>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		phoneNumber: { type: String, required: true },
		subject: { type: String, required: true },
		message: { type: String },
	},
	{ timestamps: true }
);

// Define and export the User model
const Contact = models.Contact || model<Contact>("Contact", ContactSchema);

export default Contact;
