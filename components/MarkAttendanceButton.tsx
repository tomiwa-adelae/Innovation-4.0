"use client";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { TableCell } from "./ui/table";
import { useState } from "react";
import { markAttendance } from "@/lib/actions/registered.user.actions";

export const MarkAttendanceButton = ({ id }: { id: string }) => {
	const { toast } = useToast();

	const [loading, setLoading] = useState(false);

	const markAttendanceHandler = async () => {
		try {
			setLoading(true);

			const res = await markAttendance(id);

			setLoading(false);
		} catch (error) {
			setLoading(false);
			toast({
				title: "Error!",
				description: "An error occurred!",
				variant: "destructive",
			});
		}
	};

	return (
		<TableCell className="text-right">
			<Button onClick={markAttendanceHandler} size={"md"}>
				Mark attendance
			</Button>
		</TableCell>
	);
};
