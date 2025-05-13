declare interface RegisteredUserParams {
	name: string;
	email: string;
	phoneNumber: any;
	institution?: string;
	organization?: string;
	hearAboutUs?: string;
	additionalNotes?: string;
}

declare interface AddAttendanceParams {
	name: string;
	email: any;
	phoneNumber: any;
	institution?: any;
	organization?: any;
	hearAboutUs?: any;
	additionalNotes?: any;
}

declare interface ContactParams {
	name: string;
	email: string;
	phoneNumber: any;
	subject: string;
	message?: string;
}

declare interface SearchParamProps {
	params: { [key: string]: string };
	searchParams: { [key: string]: string | string[] | undefined };
}

declare interface UrlQueryParams {
	params: string;
	key: string;
	value: string | null;
}

declare interface RemoveUrlQueryParams {
	params: string;
	keysToRemove: string[];
}
