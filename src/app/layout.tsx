import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Dodge Durango – Generacje, Silniki, Wyposażenie | Kompletny Przewodnik',
  description: 'Poznaj wszystkie generacje Dodge Durango – lata produkcji, silniki, pojemności, moce i oznaczenia. Kompletny przewodnik po wersjach wyposażenia SXT, GT, R/T, Citadel, SRT i Hellcat.',
  keywords: ["Dodge Durango, generacje Durango, silniki Durango, Durango SRT, Durango Hellcat, Durango wyposażenie, Dodge Durango dane techniczne, muscle SUV, SUV, amerykańskie samochody"],
  openGraph: {
    "title": "Dodge Durango – Generacje, Silniki, Wyposażenie | Kompletny Przewodnik",
    "description": "Poznaj wszystkie generacje Dodge Durango – lata produkcji, silniki, pojemności, moce i oznaczenia. Kompletny przewodnik po wersjach wyposażenia SXT, GT, R/T, Citadel, SRT i Hellcat.",
    "url": "https://www.dodgedurango.pl",
    "siteName": "Dodge Durango | Kompletny Przewodnik",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/off-road-car-wilderness_23-2151483004.jpg",
        "alt": "Dramatyczne ujęcie Dodge Durango SRT Hellcat 2021 z przodu"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Dodge Durango – Generacje, Silniki, Wyposażenie | Kompletny Przewodnik",
    "description": "Poznaj wszystkie generacje Dodge Durango – lata produkcji, silniki, pojemności, moce i oznaczenia. Kompletny przewodnik po wersjach wyposażenia SXT, GT, R/T, Citadel, SRT i Hellcat.",
    "images": [
      "http://img.b2bpic.net/free-photo/off-road-car-wilderness_23-2151483004.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"]
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
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
