"use client";
import { Spotlight } from "./ui/spotlight-new";
import {
	conferenceDate,
	conferenceLocation,
	conferenceTime,
} from "@/constants";
import SectionHeader from "./shared/SectionHeader";
import { useEffect, useState } from "react";
import CountdownBox from "./CountdownBox";
import { Button } from "./ui/button";
import Link from "next/link";

const Countdown = () => {
	const launchDate = new Date("May 16, 2025, 11:00:00").getTime();

	const [days, setDays] = useState<any>(0);
	const [hours, setHours] = useState<any>(0);
	const [minutes, setMinutes] = useState<any>(0);
	const [seconds, setSeconds] = useState<any>(0);
	const [message, setMessage] = useState<any>(null);

	useEffect(() => {
		var updateTime = setInterval(() => {
			const now = new Date().getTime();

			const difference = launchDate - now;

			var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
			var newHours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var newMinutes = Math.floor(
				(difference % (1000 * 60 * 60)) / (1000 * 60)
			);
			var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

			setDays(newDays);
			setHours(newHours);
			setMinutes(newMinutes);
			setSeconds(newSeconds);

			if (newDays < 10) {
				setDays("0" + newDays);
			}

			if (newHours < 10) {
				setHours("0" + newHours);
			}

			if (newMinutes < 10) {
				setMinutes("0" + newMinutes);
			}

			if (newSeconds < 10) {
				setSeconds("0" + newSeconds);
			}

			if (difference <= 0) {
				clearInterval(updateTime);
				setMessage("It's world Innovation 3.0 day!!!");
				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);
			}
		});

		return () => {
			clearInterval(updateTime);
		};
	}, [launchDate]);

	return (
		<div className="bg-gradient-to-r bg-white py-16 relative overflow-hidden">
			<SectionHeader
				title={"Time is Ticking! Are You Ready?"}
				description={`The future unlocks on the ${conferenceDate}! Get ready to unlock new possibilities, connect with visionaries, and be part of a movement that redefines the future. Don’t miss your chance to be at the forefront of groundbreaking ideas and limitless opportunities`}
			/>
			<div className="container">
				<div className="mt-8 grid grid-cols-4 gap-2 md:gap-4">
					<CountdownBox value={days} label="Days" />
					<CountdownBox value={hours} label="Hours" />
					<CountdownBox value={minutes} label="Minutes" />
					<CountdownBox value={seconds} label="Seconds" />
				</div>
				<div className="mt-8 uppercase grid grid-cols-1 md:grid-cols-2 gap-4 font-medium text-primary text-sm sm:text-base">
					<div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg px-4 md:p-8">
						<h4>Date: {conferenceDate}</h4>
					</div>
					<div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg px-4 md:p-8">
						<h4>Time: {conferenceTime}</h4>
					</div>
				</div>
				<div className="mt-4 mb-8 uppercase shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-lg px-4 md:p-8 font-medium text-primary text-sm sm:text-base">
					<h4>Location: {conferenceLocation}</h4>
				</div>
				<Button asChild size="lg">
					<Link href="/register">Secure your spot today</Link>
				</Button>
			</div>
		</div>
	);
};

export default Countdown;
