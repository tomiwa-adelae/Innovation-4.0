import { MarkAttendanceButton } from "@/components/MarkAttendanceButton";
import SectionHeader from "@/components/shared/SectionHeader";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getAttendances } from "@/lib/actions/registered.user.actions";

const page = async () => {
	const attendances = await getAttendances();

	return (
		<div className="py-10">
			<SectionHeader
				title={"Attendances for Innovation 4.0"}
				description={`16th of May, 2025`}
			/>
			<div className="mt-8 container min-h-[90vh]">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Phone number</TableHead>

							<TableHead className="text-right">
								Attendance
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{attendances?.attendances?.map((attendance: any) => (
							<TableRow key={attendance._id}>
								<TableCell className="font-medium">
									ID-{attendance._id.slice(-5)}
								</TableCell>
								<TableCell>{attendance.name}</TableCell>
								<TableCell>{attendance.email}</TableCell>
								<TableCell>{attendance.phoneNumber}</TableCell>

								<MarkAttendanceButton id={attendance._id} />
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default page;
