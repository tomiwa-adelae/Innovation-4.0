"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { email, navLinks, whatsappNumber } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { MobileNavbar } from "./MobileNavbar";

const Header = () => {
	const pathname = usePathname();
	return (
		<header>
			<div className="flex items-center justify-end gap-8 container py-4 text-xs md:text-sm font-medium">
				<a
					target="_blank"
					href={`mailto:${email}`}
					className="flex items-center justify-center gap-2 hover:text-primary transition-all hover:underline"
				>
					<Image
						src={"/assets/icons/email.svg"}
						alt="Email Icon"
						width={1000}
						height={1000}
						className="w-6 h-6"
					/>
					<span className="hidden md:block">{email}</span>
				</a>

				<a
					target="_blank"
					href={`https://wa.me/${whatsappNumber}`}
					className="flex items-center justify-center gap-2 hover:text-primary transition-all hover:underline"
				>
					<Image
						src={"/assets/icons/whatsapp.svg"}
						alt="Whatsapp Icon"
						width={1000}
						height={1000}
						className="w-5 h-5"
					/>
					<span className="hidden md:block">{whatsappNumber}</span>
				</a>
			</div>
			<Separator className="" />
			<div className="container py-2 flex items-center justify-between gap-4">
				<Link href="/">
					<Image
						src={"/assets/images/logo.png"}
						alt={"Innovation 4.0 Logo"}
						width={1000}
						height={1000}
						className="w-[100px]  object-cover"
					/>
				</Link>
				<nav className="hidden lg:flex items-center justify-center gap-8">
					{navLinks.map(({ slug, title }, index) => {
						const isActive =
							pathname === slug ||
							pathname.startsWith(`${slug}/`);
						return (
							<Link
								className={`uppercase text-[13px] hover:text-primary font-medium transition-all ${
									isActive && "text-primary"
								}`}
								href={slug}
								key={index}
							>
								{title}
							</Link>
						);
					})}
				</nav>
				<div className="lg:hidden flex items-center justify-center gap-2 md:gap-4">
					<Button variant={"ghost"} size={"md"} asChild>
						<Link href="/register">Register now</Link>
					</Button>
					<MobileNavbar />
				</div>
			</div>
			<Separator />
		</header>
	);
};

export default Header;
