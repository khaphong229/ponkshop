import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
const monsterrat = Montserrat({
  subsets: ["vietnamese"],
  weight: ['500', '600', '700']
});

export const metadata: Metadata = {
  title: "PhonkShop.dev",
  description: "PhonkShop - Shopping Cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${monsterrat.className} antialiased`}
      >
        <div className={'min-h-screen flex flex-col justify-between'}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
