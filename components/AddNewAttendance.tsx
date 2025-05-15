"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { AddNewAttendanceFormSchema } from "@/lib/validations";
import { useState } from "react";
import { Input } from "./ui/input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { AddAttendance } from "@/lib/actions/registered.user.actions";
import { Label } from "./ui/label";

export const AddNewAttendance = ({ attendances }: { attendances: any }) => {
	return (
		<div>
			{attendances?.length === 0 && (
				<div className="py-8 flex items-center justify-center gap-4">
					<p className="italic text-base text-center">
						No name found.{" "}
					</p>
					<AddNewAttendanceModal />
				</div>
			)}
		</div>
	);
};

export function AddNewAttendanceModal() {
	const { toast } = useToast();
	const [phoneNumber, setPhoneNumber] = useState<any>(null);
	const [email, setEmail] = useState<any>(null);

	const [open, setOpen] = useState(false); // controls Drawer open state

	const form = useForm<z.infer<typeof AddNewAttendanceFormSchema>>({
		resolver: zodResolver(AddNewAttendanceFormSchema),
		defaultValues: {
			name: "",
		},
	});

	async function onSubmit(data: z.infer<typeof AddNewAttendanceFormSchema>) {
		try {
			const user = {
				name: data.name,
				email,
				phoneNumber,
				additionalNotes: null,
				institution: null,
				hearAboutUs: null,
				organization: null,
			};
			const res = await AddAttendance(user);

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
			form.reset(); // optional: reset form after submission
			setOpen(false); // close the drawer
		} catch (error) {
			toast({
				title: "Error!",
				description: "An error occurred!",
				variant: "destructive",
			});
		}
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button
					className="h-14"
					size="md"
					onClick={() => setOpen(true)}
				>
					Add new attendance
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-2xl">
					<div className="container">
						<DrawerHeader>
							<DrawerTitle className="text-center">
								Add new attendance
							</DrawerTitle>
						</DrawerHeader>
						<div>
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
														placeholder="Enter full name"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<div>
										<Label>Email</Label>
										<Input
											type={"email"}
											placeholder="Enter email"
											value={email}
											onChange={(e) => {
												setEmail(e.target.value);
											}}
										/>
									</div>
									<div>
										<Label>Phone Number</Label>
										<PhoneInput
											placeholder="Enter phone number"
											value={phoneNumber}
											onChange={(phone) => {
												setPhoneNumber(phone);
											}}
											defaultCountry="NG"
											className="flex h-14 w-full rounded-lg border border-input bg-background px-3 py-2 text-base sm:text-sm"
										/>
									</div>
									<DrawerFooter>
										<Button
											disabled={
												form.formState.isSubmitting
											}
											size="md"
											type="submit"
										>
											{form.formState.isSubmitting
												? "Submitting..."
												: "Submit"}
										</Button>
										<DrawerClose asChild>
											<Button size="md" variant="outline">
												Cancel
											</Button>
										</DrawerClose>
									</DrawerFooter>
								</form>
							</Form>
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
