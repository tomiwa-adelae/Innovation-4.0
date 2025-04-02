import React from "react";

const CountdownBox = ({ value, label }: { value: any; label: string }) => {
	return (
		<div className="flex flex-col items-center w-full justify-center gap-3">
			<div className="border-2 rounded-lg p-8 text-3xl md:text-4xl lg:text-5xl w-full font-bold text-primary flex items-center justify-center">
				{value}
			</div>
			<p className="text-base uppercase text-primary font-medium">
				{label}
			</p>
		</div>
	);
};

export default CountdownBox;
