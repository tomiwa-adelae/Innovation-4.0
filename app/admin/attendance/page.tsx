import {
	AddNewAttendance,
	AddNewAttendanceModal,
} from "@/components/AddNewAttendance";
import SearchBar from "@/components/forms/Searchbar";
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

const page = async ({ searchParams }: SearchParamProps) => {
	const query = (searchParams?.query as string) || "";
	const attendances = await getAttendances({ query });

	return (
		<div className="py-10">
			<SectionHeader
				title={"Attendances for Innovation 4.0"}
				description={`16th of May, 2025`}
			/>
			<div className="mt-6 container min-h-[90vh]">
				<div className="flex items-center justify-between mb-6">
					<SearchBar />
					<AddNewAttendanceModal />
				</div>
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

								<MarkAttendanceButton
									attendance={attendance.markAttendance}
									id={attendance._id}
								/>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<AddNewAttendance attendances={attendances?.attendances} />
			</div>
		</div>
	);
};

export default page;
