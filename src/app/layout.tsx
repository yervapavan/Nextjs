import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Next.js",
    template: "%s | Next.js",
  },
  description: "Root page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <h1 className="w-screen h-14 text-yellow-400 bg-transparent flex tex-center items-center justify-center">Header</h1>
        {children}
        <h1 className="w-screen h-14 text-yellow-400 bg-transparent flex tex-center items-center justify-center">Footer</h1>
      </body>
    </html>
  );
}
