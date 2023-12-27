import { AppWrapper } from "@/context/AppWrapper";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { languages } from "../i18n/settings";

export const metadata: Metadata = {
  title: "Polaris Football Academy",
  description: "Polaris Football Academy",
};
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{ children: React.ReactNode; params: { lng: string } }>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={`${inter.className} ${oswald.variable} `}>
        <AppWrapper lng={lng}>{children}</AppWrapper>
      </body>
    </html>
  );
}
