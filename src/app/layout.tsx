import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Doner Kebap Urfa | Authentic Turkish Kebabs',
  description: 'Authentic Urfa-style doner kebabs. Fast, fresh, and affordable meals from €1-10.',
  openGraph: {
    "title": "Doner Kebap Urfa",
    "description": "Best kebabs in town.",
    "siteName": "Doner Kebap Urfa"
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
