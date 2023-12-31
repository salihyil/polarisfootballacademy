import "@/app/styles/globals.scss";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Polaris Football Academy",
  description: "Polaris Football Academy",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <body className={`${inter.className} `}>{children}</body>;
}
