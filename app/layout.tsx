import type { Metadata } from 'next';
import localFont from "next/font/local";
import './globals.css';

export const metadata: Metadata = {
  title: 'Threads Clone Coding',
  description: 'Threads Clone Coding Project generated by create next app',
}

const pre = localFont({
  src: "./font/PretendardVariable.woff2",
  variable: "--pre",
  display:'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${pre.className} h-screen`}>{children}</body>
    </html>
  )
}
