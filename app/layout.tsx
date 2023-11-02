import { Inter } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Footer from "../components/footer";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="en">
			<body className={font.className}>
				<ToastProvider />
				<ModalProvider />
				{children}
				<Footer />
			</body>
		</html>
	);
}
