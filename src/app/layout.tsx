import type { Metadata } from "next";
import "./globals.css";
import Context, { MyContext } from "./components/Context";
import LayoutContent from "./components/LayoutContent";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <Context>
          <LayoutContent>{children}</LayoutContent>
        </Context>
      </html></>
  );
}
