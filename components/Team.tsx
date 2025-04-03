import Image from "next/image";

const Team = ({
	image,
	title,
	name,
}: {
	title: string;
	name: string;
	image: string;
}) => {
	return (
		<div className="aspect-square">
			<Image
				src={image}
				alt={`${name}'s picture`}
				width={1000}
				height={1000}
				className="w-full h-full object-cover"
			/>
			<h5 className="font-medium text-lg mt-3.5 uppercase">{name}</h5>
			<p className="text-sm mt-0.5 text-gray-700">{title}</p>
		</div>
	);
};

export default Team;
