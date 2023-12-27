import "@/app/styles/globals.scss";

import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";

export const metadata: Metadata = {
  title: "Polaris Football Academy",
  description: "Polaris Football Academy",
};

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <body className={`${inter.className} ${oswald.variable} `}>{children}</body>;
}
