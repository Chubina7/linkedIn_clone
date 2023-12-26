import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { LoginProvider } from "@/context/LoginContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Cloned by Luka Chubinidze",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LoginProvider>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </LoginProvider>
    </html>
  );
}
