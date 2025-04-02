"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNavbar() {
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size={"icon"}>
					<Image
						src={"/assets/icons/menu.svg"}
						alt={"Menu Icon"}
						width={1000}
						height={1000}
						className="w-[40px] h-[40px] md:w-[40px] md:h-[40px] "
					/>
				</Button>
			</SheetTrigger>
			<SheetContent>
				<nav className="flex flex-col font-semibold gap-0.5 py-4 text-xs uppercase">
					{navLinks.map(({ title, slug }, index) => {
						const isActive =
							pathname === slug ||
							pathname.startsWith(`${slug}/`);

						return (
							<SheetClose
								asChild
								key={index}
								className="p-3.5 hover:bg-primary/5 hover:text-primary transition-all ease-out"
							>
								<Link
									href={slug}
									className={`flex items-center gap-3 justify-start ${
										isActive && "text-primary"
									}`}
								>
									<p>{title}</p>
								</Link>
							</SheetClose>
						);
					})}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
