import "./globals.css";
import { Raleway } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata = {
  title: "BeeGlad",
  description: "Company Website",
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`flex flex-col bg-[#121315] ${raleway.variable} font-raleway`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}