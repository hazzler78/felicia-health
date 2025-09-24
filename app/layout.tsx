import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Felicia Health Hub",
    template: "%s | Felicia Health Hub",
  },
  description:
    "Simple, sustainable health & fitness for women in their 30s: nutrition, training, and lifestyle.",
  openGraph: {
    title: "Felicia Health Hub",
    description:
      "Simple, sustainable health & fitness for women in their 30s: nutrition, training, and lifestyle.",
    url: "https://felicia-health-hub.pages.dev",
    siteName: "Felicia Health Hub",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://felicia-health-hub.pages.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-zinc-100">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-[--color-accent-green]"></div>
              <span className="font-semibold text-lg">Felicia Health Hub</span>
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-pink-700">Home</Link>
              <Link href="/blog" className="hover:text-pink-700">Blog</Link>
              <Link href="/about" className="hover:text-pink-700">About</Link>
              <Link href="/resources" className="hover:text-pink-700">Resources</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8 min-h-[70vh]">{children}</main>
        <footer className="border-t border-zinc-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3 items-center">
            <div>
              <div className="font-semibold">Felicia Health Hub</div>
              <p className="text-sm text-zinc-600 mt-2">Sustainable habits for strength and balance.</p>
            </div>
            <form className="card p-4">
              <div className="text-sm font-medium">Join the newsletter</div>
              <div className="mt-2 flex gap-2">
                <input type="email" placeholder="you@example.com" className="flex-1 rounded-xl border border-zinc-200 px-3 py-2" />
                <button className="rounded-xl bg-[--color-accent-pink] px-4 py-2 font-medium">Subscribe</button>
              </div>
            </form>
            <div className="text-sm text-zinc-600 flex gap-4 justify-end">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
