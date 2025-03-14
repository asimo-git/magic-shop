import type { Metadata } from "next";
import { Henny_Penny, LXGW_WenKai_Mono_TC } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import ReduxProvider from "./redux/ReduxProvider";

const mainFont = LXGW_WenKai_Mono_TC({
  variable: "--font-main",
  weight: "400",
  subsets: ["cyrillic"],
});

const titleFont = Henny_Penny({
  variable: "--font-title",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magic potion shop",
  description: "Magic potion shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.variable} ${titleFont.variable} antialiased`}
      >
        <ReduxProvider>
          <div className="flex flex-col min-h-screen font-[family-name:var(--font-main)] bg-462525">
            <Header />
            <main className="w-full flex-1 p-4">{children}</main>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
