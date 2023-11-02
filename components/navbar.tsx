import Link from "next/link";

import MainNav from "./main-nav";
import Container from "./ui/container";
import NavbarActions from "./navbar-actions";
import getCategories from "../actions/get-categories";
import { Store } from "@/types";

const Navbar = async ({ store }: { store: Store }) => {
	const categories = await getCategories(store.id);

	return (
		<div className="border-b py-2">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
					<div className='w-full flex justify-between items-center'>
						<Link href="/" className="ml-4 lg:ml-0 gap-x-2">
							<h1 className="text-2xl font-bold text-black hover:text-transparent bg-clip-text bg-gradient-to-r from-[#EA208B] via-[#00AACF] to-[#FBB03B] transition">
								{store.name}
							</h1>
						</Link>
						<NavbarActions />
					</div>
					<MainNav data={categories} />
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
