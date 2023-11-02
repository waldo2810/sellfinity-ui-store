"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
	data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
	const params = useParams()
	const pathname = usePathname();

	const routes = data.map((route) => ({
		href: `${params.storeId}/category/${route.id}`,
		label: route.name,
		active: pathname === `${params.storeId}/category/${route.id}`,
	}));

	return (
		<nav className="w-full overflow-auto mx-6 flex justify-center items-center gap-4">
			{routes.map((route) => (
				<Link
					key={route.href}
					href={route.href}
					className={cn(
						"text-sm font-medium transition-colors hover:text-black",
						route.active ? "text-black" : "text-neutral-500",
					)}
				>
					{route.label}
				</Link>
			))}
		</nav>
	);
};

export default MainNav;
