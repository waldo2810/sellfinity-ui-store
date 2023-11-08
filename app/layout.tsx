import { Inter } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import "./globals.css";
import { Loader } from "@/components/ui/loader";
import { Suspense } from "react";

const font = Inter({ subsets: ["latin"] });

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="en">
			<body className={font.className}>
				<Suspense fallback={<Loader />}>
					<ToastProvider />
					<ModalProvider />
					{children}
				</Suspense>
			</body>
		</html>
	);
}
