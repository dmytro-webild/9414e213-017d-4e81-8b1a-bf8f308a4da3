"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function WyposazeniePage() {
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
        {
          name: "Strona Główna",          id: "/"},
        {
          name: "Wyposażenie",          id: "/wyposazenie"},
        {
          name: "Silniki",          id: "/silniki"},
        {
          name: "Usterki",          id: "/usterki"},
      ]}
      brandName="DODGE DURANGO"
    />
  </div>

  <div id="equipment-intro" data-section="equipment-intro">
      <MediaAbout
      useInvertedBackground={true}
      title="Wersje wyposażenia Dodge Durango – od SXT do Hellcat"
      description="Dodge Durango oferuje szeroką gamę wersji wyposażenia, od komfortowych i rodzinnych, po ekstremalnie sportowe. Każda z nich została zaprojektowana, aby sprostać unikalnym potrzebom i preferencjom kierowców, łącząc luksus, technologię i niezrównane osiągi."
      imageSrc="http://img.b2bpic.net/free-photo/female-salesperson-car-showroom-standing-by-car_1303-22387.jpg"
      imageAlt="Rząd Dodge Durango w różnych wersjach wyposażenia od bazowej do sportowej"
    />
  </div>

  <div id="equipment-trims" data-section="equipment-trims">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          tag: "SXT – Bazowy",          title: "Komfort i Funkcjonalność",          subtitle: "3.6L V6 293 KM",          description: "18\" felgi, Uconnect 8.4\", kamera cofania, klimatyzacja dwustrefowa, Apple CarPlay, zaawansowane systemy bezpieczeństwa.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fancy-car-available-selling_23-2148332887.jpg",          imageAlt: "Dodge Durango SXT – srebrny egzemplarz na zewnątrz"},
        {
          tag: "GT – Sportowy",          title: "Agresywny Styl",          subtitle: "V6 lub V8 opcja",          description: "20\" felgi sportowe, unikalny badge GT, opcjonalny aktywny wydech, sportowe siedzenia z dodatkowym podparciem, dynamiczne zawieszenie.",          imageSrc: "http://img.b2bpic.net/free-photo/young-digital-nomad-traveling-winter-time_23-2149207276.jpg",          imageAlt: "Dodge Durango GT – sportowy kąt widzenia"},
        {
          tag: "R/T – Muscle",          title: "Klasyczne Osiągi",          subtitle: "5.7L V8 HEMI 360 KM",          description: "Czerwone zaciski hamulcowe, sportowy układ wydechowy, funkcja Launch Control, standardowy napęd AWD, podgrzewane fotele przednie.",          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-view-off-road-car-with-nature-terrain-weather-conditions_23-2151430102.jpg",          imageAlt: "Dodge Durango R/T – agresywny, ciemny kolor"},
        {
          tag: "Citadel – Luxury",          title: "Maksymalny Luksus",          subtitle: "Skóra premium",          description: "Skóra Nappa, trzy rzędy podgrzewanych siedzeń, 20\" chromowane felgi, zaawansowana nawigacja, bezkluczykowy dostęp, pakiet bezpieczeństwa.",          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-black-white-background_23-2150498630.jpg",          imageAlt: "Dodge Durango Citadel – luksusowe wnętrze z drewnianymi akcentami"},
        {
          tag: "SRT 392 – Performance",          title: "Torowe Przyspieszenie",          subtitle: "6.4L 475 KM",          description: "Wysokowydajne hamulce Brembo, adaptacyjne zawieszenie Bilstein, Launch Control, przyspieszenie 0-100 km/h w 4,4s, tryby jazdy SRT.",          imageSrc: "http://img.b2bpic.net/free-photo/blue-pickup-truck-road-strength-motion-modern-freedom_169016-69739.jpg",          imageAlt: "Dodge Durango SRT 392 – na torze wyścigowym"},
        {
          tag: "SRT Hellcat – Ekstremalny",          title: "Nieograniczona Moc",          subtitle: "6.2L 717 KM",          description: "System Line Lock, potężne hamulce Brembo, przyspieszenie 0-100 km/h w 3,5s, prędkość maksymalna 290 km/h, charakterystyczne logo Hellcat.",          imageSrc: "http://img.b2bpic.net/free-photo/gray-coupe-road-focus_417767-24.jpg",          imageAlt: "Dodge Durango SRT Hellcat – dramatyczne ujęcie"}
      ]}
      title="Przegląd wersji wyposażenia"
      description="Odkryj kluczowe cechy każdej wersji Dodge Durango, która łączy innowacyjne technologie z potężnymi osiągami."
    />
  </div>

  <div id="equipment-comparison" data-section="equipment-comparison">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "sxt",          tag: "SXT",          price: "Bazowy",          period: "3.6L V6",          description: "Podstawowa wersja SXT, zapewniająca komfort i funkcjonalność z silnikiem 3.6L V6.",          featuresTitle: "Kluczowe Cechy",          features: [
            "18\" felgi",            "Uconnect 8.4\"",            "Kamera cofania",            "Klimatyzacja dwustrefowa"
          ],
          button: {
            text: "Wybierz SXT"
          }
        },
        {
          id: "gt",          tag: "GT",          price: "Sportowy",          period: "V6/V8",          description: "Sportowa wersja GT, oferująca agresywny styl i dynamiczne wyposażenie.",          featuresTitle: "Kluczowe Cechy",          features: [
            "20\" felgi sportowe",            "Aktywny wydech (opcja)",            "Sportowe siedzenia",            "Design GT"
          ],
          button: {
            text: "Wybierz GT"
          }
        },
        {
          id: "rt",          tag: "R/T",          price: "Muscle",          period: "5.7L V8 HEMI",          description: "Wersja R/T, kwintesencja muscle cara z potężnym silnikiem 5.7L V8 HEMI.",          featuresTitle: "Kluczowe Cechy",          features: [
            "Czerwone zaciski",            "Sportowy wydech",            "Launch Control",            "AWD Standard"
          ],
          button: {
            text: "Wybierz R/T"
          }
        },
        {
          id: "citadel",          tag: "Citadel",          price: "Luksusowy",          period: "Skóra Nappa",          description: "Luksusowa wersja Citadel, zapewniająca maksymalny komfort i prestiż z wykończeniem ze skóry Nappa.",          featuresTitle: "Kluczowe Cechy",          features: [
            "Skóra premium",            "3 rzędy ogrzewane",            "20\" chromowane felgi",            "Nawigacja"
          ],
          button: {
            text: "Wybierz Citadel"
          }
        },
        {
          id: "srt392",          tag: "SRT 392",          price: "Performance",          period: "6.4L V8",          description: "Wersja SRT 392, stworzona dla torowych osiągów z potężnym silnikiem 6.4L V8.",          featuresTitle: "Kluczowe Cechy",          features: [
            "Hamulce Brembo",            "Zawieszenie Bilstein",            "0-100 w 4,4s",            "Tryby jazdy SRT"
          ],
          button: {
            text: "Wybierz SRT 392"
          }
        },
        {
          id: "hellcat",          tag: "Hellcat",          price: "Ekstremalny",          period: "6.2L V8 SC",          description: "Ekstremalna wersja Hellcat, oferująca niezrównaną moc i osiągi z doładowanym silnikiem 6.2L V8.",          featuresTitle: "Kluczowe Cechy",          features: [
            "Line Lock",            "Brembo",            "0-100 w 3,5s",            "290 km/h V-max"
          ],
          button: {
            text: "Wybierz Hellcat"
          }
        }
      ]}
      title="Porównanie Wersji Wyposażenia"
      description="Szczegółowe porównanie kluczowych funkcji i specyfikacji każdej wersji Dodge Durango, abyś mógł wybrać idealny model dla siebie."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="DODGE DURANGO"
      columns={[
        {
          title: "Nawigacja",          items: [
            {
              label: "Strona Główna",              href: "/"},
            {
              label: "Wyposażenie",              href: "/wyposazenie"},
            {
              label: "Silniki",              href: "/silniki"},
            {
              label: "Usterki",              href: "/usterki"},
          ],
        },
        {
          title: "Generacje",          items: [
            {
              label: "1. Generacja (DN)",              href: "/#generations"},
            {
              label: "2. Generacja (HB)",              href: "/#generations"},
            {
              label: "3. Generacja (WD)",              href: "/#generations"},
          ],
        },
        {
          title: "Kontakt",          items: [
            {
              label: "O nas",              href: "#"},
            {
              label: "Polityka Prywatności",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Dodge Durango. Wszelkie prawa zastrzeżone."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}