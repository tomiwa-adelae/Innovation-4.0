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
import { subjects } from "@/constants";
import { useState } from "react";
import { Spotlight } from "../ui/spotlight-new";
// import { contactUs } from "@/lib/actions/contact.actions";
import { ContactFormSchema } from "@/lib/validations";
import { useToast } from "@/hooks/use-toast";
import { contactUs } from "@/lib/actions/contact.actions";
import { useRouter } from "next/navigation";

export function ContactForm() {
	const router = useRouter();
	const { toast } = useToast();
	const [value, setValue] = useState<string | undefined>(undefined);
	const form = useForm<z.infer<typeof ContactFormSchema>>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		},
	});

	async function onSubmit(data: z.infer<typeof ContactFormSchema>) {
		try {
			const contact = {
				name: data.name,
				email: data.email,
				phoneNumber: value,
				subject: data.subject,
				message: data.message,
			};
			const res = await contactUs(contact);

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
			router.push(`/success-contact?id=${res?.contact?._id}`);
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
			<div className="container">
				<h2
					className={`uppercase text-xl md:text-2xl lg:text-3xl leading-loose md:leading-loose lg:leading-normal  font-semibold mb-2 text-center text-primary`}
				>
					Send us a message
				</h2>

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
						<FormField
							control={form.control}
							name="subject"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Subject</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a subject" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{subjects.map((subject, index) => (
												<SelectItem
													key={index}
													value={subject}
												>
													{subject}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea
											placeholder="We are happy to hear your inquiries..."
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
}
