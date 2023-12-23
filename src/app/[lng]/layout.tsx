import Pathname from "@/components/Pathname/page";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.scss";
import { languages } from "../i18n/settings";
import { AppWrapper } from "@/context";

export const metadata: Metadata = {
  title: "Polaris Football Academy",
  description: "Polaris Football Academy",
};
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

console.log("RootLayout");


export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{ children: React.ReactNode; params: { lng: string } }>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={`${inter.className}  `}>
        <AppWrapper >
          <Pathname lang={lng} child={children}></Pathname>
        </AppWrapper>
      </body>
    </html>
  );
}
