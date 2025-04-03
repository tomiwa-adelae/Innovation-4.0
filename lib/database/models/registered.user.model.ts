import { Document, Schema, model, models } from "mongoose";

// Define a TypeScript interface for type safety
export interface IRegisteredUser extends Document {
	name: string;
	email: string;
	phoneNumber: string;
	institution?: string;
	organization?: string;
	hearAboutUs?: string;
	additionalNotes?: string;
}

// Define the Mongoose Schema
const RegisteredUserSchema = new Schema<IRegisteredUser>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		phoneNumber: { type: String, required: true },
		institution: { type: String },
		organization: { type: String },
		hearAboutUs: { type: String },
		additionalNotes: { type: String },
	},
	{ timestamps: true }
);

// Define and export the User model
const RegisteredUser =
	models.RegisteredUser ||
	model<IRegisteredUser>("RegisteredUser", RegisteredUserSchema);

export default RegisteredUser;
