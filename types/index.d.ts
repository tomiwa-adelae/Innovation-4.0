declare interface RegisteredUserParams {
	name: string;
	email: string;
	phoneNumber: any;
	institution?: string;
	organization?: string;
	hearAboutUs?: string;
	additionalNotes?: string;
}

declare interface ContactParams {
	name: string;
	email: string;
	phoneNumber: any;
	subject: string;

	message?: string;
}
