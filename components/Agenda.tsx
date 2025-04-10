import { Spotlight } from "./ui/spotlight-new";
import { AgendaTimeline } from "@/components/ui/agenda-timeline";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";
import { agendas } from "@/constants";

const Agenda = () => {
	const data = agendas.map((agenda, index) => ({
		title: agenda.title,
		content: agenda.agenda.map((agenda, index) => (
			<div
				key={index}
				className="flex items-center justify-start gap-2 mb-4"
			>
				<Image
					src={"/assets/icons/check.svg"}
					alt={"Check icon"}
					width={1000}
					height={1000}
					className="w-5 h-5"
				/>
				<p className="text-base text-gray-800 font-medium">{agenda}</p>
			</div>
		)),
	}));

	return (
		<div className="bg-white py-16 relative overflow-hidden">
			{/* <Spotlight /> */}
			<SectionHeader title={"Event Agenda"} position={"center"} />
			<div className="mt-8">
				<AgendaTimeline data={data} />
			</div>
		</div>
	);
};

export default Agenda;
