import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD",
  description: "Developed By Junior Ferreira",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
