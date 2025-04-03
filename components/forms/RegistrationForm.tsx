"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Textarea } from "../ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { hearAboutUs } from "@/constants";
import { useState } from "react";
import { RegistrationFormSchema } from "@/lib/validations";
import { useToast } from "@/hooks/use-toast";
import { Spotlight } from "../ui/spotlight-new";
import SectionHeader from "../shared/SectionHeader";
import { registerUser } from "@/lib/actions/registered.user.actions";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
	const router = useRouter();
	const { toast } = useToast();
	const [value, setValue] = useState<string | undefined>(undefined);
	const form = useForm<z.infer<typeof RegistrationFormSchema>>({
		resolver: zodResolver(RegistrationFormSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			additionalNotes: "",
			organization: "",
			institution: "",
			hearAboutUs: "",
		},
	});

	async function onSubmit(data: z.infer<typeof RegistrationFormSchema>) {
		try {
			const user = {
				name: data.name,
				email: data.email,
				phoneNumber: value,
				additionalNotes: data.additionalNotes,
				institution: data.institution,
				hearAboutUs: data.hearAboutUs,
				organization: data.organization,
			};
			const res = await registerUser(user);

			if (res?.status == 400)
				return toast({
					title: "Error!",
					description: res?.message,
					variant: "destructive",
				});

			toast({
				title: "Success!",
				description: res?.message,
			});
			router.push(`/success-registration?id=${res?.registeredUser?._id}`);
		} catch (error) {
			toast({
				title: "Error!",
				description: "An error occurred!",
				variant: "destructive",
			});
		}
	}

	return (
		<div className="bg-white py-16 relative overflow-hidden">
			<Spotlight />
			<SectionHeader
				title={"Secure Your Spot at Innovation 4.0"}
				description={`Be part of a groundbreaking experience that will unlock new possibilities for your growth and innovation. Fill out the form below to register for Innovation 4.0 and take the next step toward transforming your future!`}
			/>
			<div className="container mt-8">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Full name</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your full name"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type={"email"}
											placeholder="Enter your email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<PhoneInput
											placeholder="Enter phone number"
											value={value}
											onChange={(phone) => {
												setValue(phone);
												field.onChange(phone); // Ensure form gets updated
											}}
											defaultCountry="NG"
											className="flex h-14 w-full rounded-lg border border-input bg-background px-3 py-2 text-base sm:text-sm"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="institution"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Institution</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter your institution name"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="organization"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Organization</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter your organization name"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="hearAboutUs"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										How did you hear about us?
									</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select how you heard about us" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{hearAboutUs.map(
												(subject, index) => (
													<SelectItem
														key={index}
														value={subject}
													>
														{subject}
													</SelectItem>
												)
											)}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="additionalNotes"
							render={({ field }) => (
								<FormItem>
									<FormLabel>AdditionalNotes</FormLabel>
									<FormControl>
										<Textarea
											placeholder="We are happy to hear from you..."
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							disabled={form.formState.isSubmitting}
							size="lg"
							type="submit"
						>
							{form.formState.isSubmitting
								? "Sending..."
								: "Send message"}
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default RegistrationForm;
