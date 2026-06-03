"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dodge Durango – Najczęstsze Usterki i Problemy | Przewodnik',
  description: 'Poznaj typowe usterki i awarie Dodge Durango, na co zwracać uwagę oraz jak skutecznie zapobiegać kosztownym naprawom. Kompleksowy przewodnik dla właścicieli.',
  openGraph: {
    title: 'Dodge Durango – Najczęstsze Usterki i Problemy | Przewodnik',
    description: 'Poznaj typowe usterki i awarie Dodge Durango, na co zwracać uwagę oraz jak skutecznie zapobiegać kosztownym naprawom. Kompleksowy przewodnik dla właścicieli.',
    url: 'https://www.dodgedurango.pl/usterki',
    images: [
      {
        url: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ED2hZSKV5oKFUyg41C0Ey45yru/uploaded-1780478310528-23fgj98d.png',
        alt: 'Mroczne ujęcie Dodge Durango na tle zachodzącego słońca z czerwonym blaskiem'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dodge Durango – Najczęstsze Usterki i Problemy | Przewodnik',
    description: 'Poznaj typowe usterki i awarie Dodge Durango, na co zwracać uwagę oraz jak skutecznie zapobiegać kosztownym naprawom. Kompleksowy przewodnik dla właścicieli.',
    images: [
      'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ED2hZSKV5oKFUyg41C0Ey45yru/uploaded-1780478310528-23fgj98d.png'
    ]
  }
};

export default function UsterkiPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="medium"
        background="fluid"
        cardStyle="soft-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Strona Główna", id: "/" },
              { name: "Usterki", id: "/usterki" },
            ]}
            brandName="DODGE DURANGO"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardScroll
            background={{ variant: "radial-gradient" }}
            title="NAJCZĘSTSZE USTERKI DODGE DURANGO"
            description="Poznaj najczęstsze usterki Dodge Durango, od drobnych problemów po poważne awarie. Dowiedz się, na co zwracać uwagę i jak zapobiegać kosztownym naprawom."
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ED2hZSKV5oKFUyg41C0Ey45yru/uploaded-1780478310528-23fgj98d.png"
            imageAlt="Mroczne ujęcie Dodge Durango na tle zachodzącego słońca z czerwonym blaskiem"
            className="[&_.background-image-wrapper]:after:bg-[linear-gradient(to_bottom,transparent,rgba(var(--background-rgb),0.7)_50%,rgba(var(--background-rgb),0.9)_70%,rgba(var(--background-rgb),1)_100%)] [&_.background-image-wrapper]:before:bg-[linear-gradient(to_top,transparent,rgba(var(--accent-rgb),0.3)_10%,transparent_50%)]"
          />
        </div>

        <div id="intro" data-section="intro">
          <MediaAbout
            useInvertedBackground={true}
            title="Wprowadzenie do usterek Dodge Durango"
            description="Dodge Durango, choć ceniony za swoją moc i wytrzymałość, jak każdy pojazd, może doświadczać pewnych typowych usterek. Zrozumienie najczęstszych problemów, na które napotykają właściciele, jest kluczowe dla utrzymania pojazdu w doskonałym stanie i unikania niespodziewanych kosztów. Ten przewodnik pomoże Ci zidentyfikować potencjalne problemy i przygotować się na nie."
            imageSrc="http://img.b2bpic.net/free-photo/car-repair-maintenance_181624-2051.jpg"
            imageAlt="Mechanik sprawdzający silnik samochodu"
          />
        </div>

        <div id="severity-legend" data-section="severity-legend">
          <MetricCardTwo
            textboxLayout="default"
            useInvertedBackground={true}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            title="Legenda Poziomów Usterki"
            description="Zrozum, co oznaczają poszczególne poziomy poważności usterek."
            metrics={[
              {
                id: "low",                value: "Niska",                description: "Drobne problemy, które nie wpływają na bezpieczeństwo ani podstawową funkcjonalność pojazdu. Wymagają uwagi, ale nie natychmiastowej interwencji."
              },
              {
                id: "moderate",                value: "Umiarkowana",                description: "Problemy mogące wpływać na komfort jazdy lub wymagać naprawy w niedalekiej przyszłości, aby zapobiec dalszym uszkodzeniom."
              },
              {
                id: "high",                value: "Wysoka",                description: "Poważne usterki wpływające na bezpieczeństwo, wydajność lub możliwość użytkowania pojazdu. Wymagają natychmiastowej naprawy."
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}