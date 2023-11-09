"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const params = useParams();
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/${params.storeId}/category/${route.id}`, // Use a leading slash to make it absolute
    label: route.name,
    active: pathname === `/${params.storeId}/category/${route.id}`, // Also use a leading slash here
  }));

  return (
    <nav className="w-full overflow-auto mx-6 flex md:justify-center items-center gap-4 whitespace-nowrap no-scroll">
      <Link
        key={`/${params.storeId}/product`}
        href={`/${params.storeId}/product`}
        className={cn(
          "text-sm font-medium transition-colors text-neutral-500 hover:text-black sm:mb-3"
        )}
      >
        Todos los productos
      </Link>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black sm:mb-3",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
