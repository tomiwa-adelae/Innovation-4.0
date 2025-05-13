"use client";

import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchBar = () => {
	const [query, setQuery] = useState("");

	const router = useRouter();

	const searchParams = useSearchParams();

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			let newUrl = "";

			if (query) {
				newUrl = formUrlQuery({
					params: searchParams.toString(),
					key: "query",
					value: query,
				});
			} else {
				newUrl = removeKeysFromQuery({
					params: searchParams.toString(),
					keysToRemove: ["query"],
				});
			}

			router.push(newUrl, { scroll: false });
		}, 1000);
		return () => clearTimeout(delayDebounceFn);
	}, [query, searchParams, router]);

	return (
		<div className="border rounded-lg flex-1  px-4 flex items-center justify-end md:justify-center">
			<Search className="text-muted-foreground w-5 h-5" />
			<Input
				type="text"
				value={query}
				placeholder={`Search name, email, phone number...`}
				className="border-none"
				onChange={(e) => setQuery(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
