import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { LoginProvider } from "@/context/LoginContext";
import AuthProvider from "@/components/authProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Cloned by Luka Chubinidze",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <LoginProvider>
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </LoginProvider>
      </AuthProvider>
    </html>
  );
}
