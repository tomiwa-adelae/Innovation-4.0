import Head from "next/head";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";
import { websiteURL } from "@/constants";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Innovation 4.0 | Unlocking the Power of You",
	description:
		"Discover the power within you at Innovation 4.0! Join top innovators, entrepreneurs, and thought leaders in an inspiring conference designed to ignite your potential.",
	keywords:
		"innovation, leadership, technology, networking, business growth, conference, startup, future trends, john ogunjide, tomiwa, tomiwa adelae, innovation 3.0, innovation 4.0, innovation conference, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University",
	openGraph: {
		images: "/assets/images/opengraph.png",
	},
	metadataBase: new URL(websiteURL),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta property="og:image" content="/opengraph.png" />
				<meta
					property="og:image"
					content="/assets/images/opengraph.png"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				/>
				<meta
					data-n-head="ssr"
					data-hid="viewport"
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
				/>
			</Head>
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
