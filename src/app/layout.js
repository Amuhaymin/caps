import { Inter } from "next/font/google";
import "./globals.css";
import SparklesIcon from "./components/SparklesIcon";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to min-h-screen text-black"
        }
      >
        <main className="p-4 max-w-2xl mx-auto">
          <header className="flex justify-between my-8">
            <Link href="/" className="flex gap-1">
             <SparklesIcon />

              <span>caps</span>
            </Link>
            <nav className="flex gap-6 text-black/75">
              <a href="mailto:abdulmuhaymin55@yahoo.com">Contact</a>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
