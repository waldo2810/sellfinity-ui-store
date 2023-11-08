import { Store } from "@/types";

export default function Footer({ store }: { store: Store }) {
	return (
		<footer className="bg-white border-t">
			<div className="mx-auto py-10">
				<p className="text-center text-xs text-black">
					&copy; {store.name}. 2023. Todos los derechos reservados.
				</p>
			</div>
		</footer>
	);
}
