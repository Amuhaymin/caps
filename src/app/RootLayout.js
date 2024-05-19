import { inter } from "./layout";

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
            <a href="" className="flex gap-1">
              <SparklesIcon />
              <span>caps</span>
            </a>
            <nav className="flex gap-6 text-black/75">

              <a href="">Contact</a>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
