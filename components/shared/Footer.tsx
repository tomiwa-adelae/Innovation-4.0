import Link from "next/link";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="bg-blue-900 py-8 text-center text-white font-medium uppercase text-xs">
			<div className="container">
				<Link href="/" className="hover:text-secondary transition-all">
					&copy; {year} Innovation 4.0. All rights reserved
				</Link>
			</div>
		</div>
	);
};

export default Footer;
