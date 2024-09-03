import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Astari Nabila | Portfolio",
  description: "Astari Nabila | Personal Portfolio",
  icons: {
    icon: "/favicon2.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
