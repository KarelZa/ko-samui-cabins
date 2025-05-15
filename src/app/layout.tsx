import { Logo } from "@/src/components/Logo";
import { Navigation } from "@/src/components/Navigation";

import "@/src/styles/globals.css";

export const metadata = {
  title: "The Ko-Samui Cabins",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Displayed on all pages
  // Children is what belongs to each page
  return (
    <html lang="en">
      <body className="bg-blue-800">
        <header className="bg-blue-500">
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
