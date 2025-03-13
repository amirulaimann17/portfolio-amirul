import type { Metadata } from "next";
import "./globals.css";
import { FloatingNav } from "./components/ui/FloatingNav";

export const metadata: Metadata = {
  title: "Amirul Aiman | Portfolio",
  description: "Software Engineer Portfolio of Amirul Aiman",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative">
        <FloatingNav
          navItems={[
            { name: "About", link: "#about" },
            { name: "Projects", link: "#projects" },
            { name: "Contact", link: "#contact" },
          ]}
        />


        {/* Full-width layout */}
        <main className="w-full p-5 pt-10">{children}</main>
      </body>
    </html>
  );
}
