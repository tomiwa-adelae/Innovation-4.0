import React from "react";

const SectionHeader = ({
	title,
	description,
	position = "left",
	color = "primary",
}: {
	title: string;
	description?: string | React.ReactNode;
	position?: string;
	color?: string;
}) => {
	return (
		<div className={`container ${position === "center" && "text-center"}`}>
			<h2
				className={`uppercase text-xl md:text-2xl lg:text-3xl leading-loose ${
					color === "primary" ? "text-primary" : "text-secondary"
				} font-semibold ${description && "mb-2"}`}
			>
				{title}
			</h2>
			<p
				className={`text-sm leading-loose ${
					color === "primary" ? "text-black" : "text-white"
				}`}
			>
				{description}
			</p>
		</div>
	);
};

export default SectionHeader;
