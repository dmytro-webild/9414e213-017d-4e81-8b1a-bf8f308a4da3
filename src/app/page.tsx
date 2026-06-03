"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';

export default function LandingPage() {
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
          name: "Usterki",          id: "/usterki"}
      ]}
      brandName="DODGE DURANGO"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "radial-gradient"}}
      title="DODGE DURANGO"
      description="Amerykański muscle SUV. Trzy generacje. Nieograniczona moc."
      buttons={[
        {
          text: "Poznaj silniki",          href: "/silniki"},
        {
          text: "Zobacz wyposażenie",          href: "/wyposazenie"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ED2hZSKV5oKFUyg41C0Ey45yru/uploaded-1780478310528-23fgj98d.png"
      imageAlt="Dramatyczne ujęcie Dodge Durango SRT Hellcat 2021 z przodu"
    />
  </div>

  <div id="intro" data-section="intro">
      <MediaAbout
      useInvertedBackground={true}
      title="Dodge Durango – historia, generacje i dane techniczne"
      description="Dodge Durango to prawdziwa legenda amerykańskich dróg, symbolizująca połączenie siły, luksusu i niezawodności. Od swojego debiutu w 1997 roku, Durango przeszedł znaczącą ewolucję, stając się jednym z najbardziej rozpoznawalnych SUV-ów na rynku. Poznaj jego bogatą historię, od podstaw stworzonych na bazie pickupa, przez luksusowe adaptacje, aż po najpotężniejsze wersje Hellcat."
      imageSrc="http://img.b2bpic.net/free-photo/bridge-river-middle-mountains-blue-sky_181624-8961.jpg"
      imageAlt="Sylwetki Dodge Durango trzech generacji symbolizujące jego ewolucję"
    />
  </div>

  <div id="generations" data-section="generations">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          tag: "1. generacja (DN)",          title: "1997–2003",          subtitle: "Platforma: Chrysler AN",          description: "Pierwszy Durango oparty na ramie pickupa Dakota. Tylnonapędowy lub 4WD.",          imageSrc: "http://img.b2bpic.net/free-photo/car-parked-parking-area_1308-41428.jpg",          imageAlt: "Zdjęcie pierwszej generacji Dodge Durango (1997-2003) o kanciastych kształtach",          buttons: [
            {
              text: "Kluczowy fakt: pierwszy pełnowymiarowy SUV Dodge.",              href: "#"},
          ],
        },
        {
          tag: "2. generacja (HB)",          title: "2004–2009",          subtitle: "Platforma: Mercedes ML pochodna",          description: "Przejście na niezależne zawieszenie, większe wnętrze, silniki HEMI.",          imageSrc: "http://img.b2bpic.net/free-photo/sedan-parked-deserted-area-cloudy-sky_181624-24377.jpg",          imageAlt: "Zdjęcie drugiej generacji Dodge Durango (2004-2009) o zaokrąglonych liniach nadwozia",          buttons: [
            {
              text: "Kluczowy fakt: współdzielona platforma z Mercedes-Benz ML.",              href: "#"},
          ],
        },
        {
          tag: "3. generacja (WD)",          title: "2011–2024",          subtitle: "Platforma: Chrysler LX",          description: "Od V6 Pentastar po 717 KM Hellcat. Najmocniejszy seryjny SUV na świecie.",          imageSrc: "http://img.b2bpic.net/free-photo/dark-pickup-truck-wet-winter-road-motion-power-road_169016-71373.jpg",          imageAlt: "Zdjęcie trzeciej generacji Dodge Durango (2011-2024) o nowoczesnym, agresywnym wyglądzie",          buttons: [
            {
              text: "Kluczowy fakt: najmocniejszy seryjny SUV na świecie.",              href: "#"},
          ],
        },
      ]}
      title="Generacje Dodge Durango"
      description="Prześledź ewolucję Dodge Durango przez trzy dekady, od jego solidnych korzeni po status najmocniejszego SUV-a na świecie."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq1",          title: "Ile generacji ma Dodge Durango?",          content: "Dodge Durango doczekał się trzech głównych generacji: pierwszej (1997–2003), drugiej (2004–2009) i trzeciej (od 2011 do dziś)."},
        {
          id: "faq2",          title: "Jaki silnik ma Dodge Durango Hellcat?",          content: "Dodge Durango Hellcat jest napędzany doładowanym silnikiem 6.2L V8 HEMI Supercharged, generującym moc 717 koni mechanicznych i moment obrotowy 881 Nm."},
        {
          id: "faq3",          title: "Czy Dodge Durango nadal jest produkowany?",          content: "Tak, Dodge Durango jest nadal produkowany, a jego trzecia generacja przeszła liczne modernizacje, utrzymując go jako kluczowy model w ofercie Dodge."},
        {
          id: "faq4",          title: "Ile miejsc ma Dodge Durango?",          content: "W zależności od konfiguracji, Dodge Durango może pomieścić od 5 do 7 pasażerów, oferując elastyczne wnętrze dostosowane do potrzeb rodzinnych i transportowych."},
      ]}
      title="Często Zadawane Pytania"
      faqsAnimation="blur-reveal"
      description="Oto najczęściej zadawane pytania dotyczące historii, osiągów i specyfikacji Dodge Durango."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Pakiety Dodatkowe"
      description="Wybierz pakiet serwisowy idealny dla Twojego Dodge Durango."
      plans={[
        {
          id: "basic-service",          tag: "Podstawowy",          price: "399 PLN",          period: "rocznie",          description: "Standardowy przegląd i wymiana płynów. Idealny dla codziennej eksploatacji.",          featuresTitle: "Zawiera:",          features: [
            "Wymiana oleju silnikowego",            "Kontrola płynów eksploatacyjnych",            "Sprawdzenie układu hamulcowego",            "Podstawowa diagnostyka komputerowa"
          ],
          button: {
            text: "Wybierz Pakiet Podstawowy"
          }
        },
        {
          id: "premium-service",          tag: "Premium",          price: "699 PLN",          period: "rocznie",          description: "Rozszerzony serwis z dodatkowymi kontrolami. Zapewnij swojemu Durango najlepszą opiekę.",          featuresTitle: "Zawiera:",          features: [
            "Wszystko z pakietu Podstawowego",            "Wymiana filtrów (oleju, powietrza, kabinowy)",            "Sprawdzenie zawieszenia i układu kierowniczego",            "Zaawansowana diagnostyka z raportem"
          ],
          button: {
            text: "Wybierz Pakiet Premium"
          }
        },
        {
          id: "ultimate-service",          tag: "Ultimate",          price: "1299 PLN",          period: "rocznie",          description: "Kompleksowy pakiet zapewniający maksymalne bezpieczeństwo i wydajność. Dla najbardziej wymagających kierowców.",          featuresTitle: "Zawiera:",          features: [
            "Wszystko z pakietu Premium",            "Geometria kół",            "Czyszczenie układu klimatyzacji",            "Ozonowanie wnętrza"
          ],
          button: {
            text: "Wybierz Pakiet Ultimate"
          }
        }
      ]}
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