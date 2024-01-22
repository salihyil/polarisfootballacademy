import "@/app/styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; params: { lng: string } }>) {
  return <body>{children}</body>;
}
