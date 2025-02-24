"use client"
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

 const metadata: Metadata = {
  title: {
    default: "Next.js",
    template: "%s | Next.js",
  },
  description: "Root page",
};

const links=[
  {name:"Register",href:"/register"},
  {name:"Login",href:"/login"},
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname=usePathname()
  return (
    <html lang="en">
      <body>
      {links.map((link)=>{
        const isActive= pathname===link.href || pathname.startsWith(`${link.href}/`) && link.href!="/"
        return(
          <>
          <Link className={isActive? "font-bold mr-4":"text-blue-600"} href={link.href}>{link.name}</Link>
          <br/>
          </>
        )
      })}
       <h1 className="w-screen h-14 text-yellow-400 bg-transparent flex tex-center items-center justify-center">Header</h1>
        {children}
        <h1 className="w-screen h-14 text-yellow-400 bg-transparent flex tex-center items-center justify-center">Footer</h1>
      </body>
    </html>
  );
}
