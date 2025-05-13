"use client";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { TableCell } from "./ui/table";
import { useState } from "react";
import { markAttendance } from "@/lib/actions/registered.user.actions";
import { LoaderCircle } from "lucide-react";

export const MarkAttendanceButton = ({
	id,
	attendance,
}: {
	id: string;
	attendance: boolean;
}) => {
	const { toast } = useToast();

	const [loading, setLoading] = useState(false);

	const markAttendanceHandler = async () => {
		try {
			setLoading(true);

			const res = await markAttendance(id);

			if (res?.status === 400)
				return toast({
					title: "Error!",
					variant: "destructive",
					description: res.message,
				});

			if (res?.status === 200) {
				toast({
					title: "Success",
					description: "Attendance marked.",
				});
			}
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
			<Button
				disabled={loading || attendance}
				onClick={markAttendanceHandler}
				size={"md"}
			>
				{loading && <LoaderCircle className="animate-spin" />}
				{!loading && attendance ? "Attended" : "Mark attendance"}
			</Button>
		</TableCell>
	);
};
