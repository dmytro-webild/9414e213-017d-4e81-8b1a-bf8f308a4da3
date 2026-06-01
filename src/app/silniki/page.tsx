"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

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
          name: "Strona Główna",
          id: "/",
        },
        {
          name: "Wyposażenie",
          id: "/wyposazenie",
        },
        {
          name: "Silniki",
          id: "/silniki",
        },
      ]}
      brandName="DODGE DURANGO"
    />
  </div>

  <div id="engines-intro" data-section="engines-intro">
      <MediaAbout
      useInvertedBackground={false}
      title="Silniki Dodge Durango – dane techniczne, oznaczenia, pojemności"
      description="Odkryj serce każdego Dodge Durango – od ekonomicznych V6 Pentastar, przez legendarne V8 HEMI, aż po potężne doładowane jednostki SRT Hellcat. Poznaj ich dane techniczne, generacje i unikalne oznaczenia."
      imageSrc="http://img.b2bpic.net/free-photo/close-up-car-engine_1232-1707.jpg"
      imageAlt="Kolekcja silników Dodge Durango z różnych generacji na ciemnym tle"
    />
  </div>

  <div id="engines-list" data-section="engines-list">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "gen1-3.9v6",
          name: "3.9L V6 Magnum",
          price: "175 KM",
          variant: "305 Nm",
          imageSrc: "http://img.b2bpic.net/free-photo/engine-piston-cross-section_1232-2589.jpg",
          imageAlt: "Silnik Dodge Durango 3.9L V6 Magnum",
        },
        {
          id: "gen1-4.7v8",
          name: "4.7L V8 PowerTech",
          price: "230 KM",
          variant: "400 Nm",
          imageSrc: "http://img.b2bpic.net/free-photo/turbocharged-engine-sports-car-close-up-hood_78492-3881.jpg",
          imageAlt: "Silnik Dodge Durango 4.7L V8 PowerTech",
        },
        {
          id: "gen1-5.9v8",
          name: "5.9L V8 Magnum",
          price: "245 KM",
          variant: "455 Nm",
          imageSrc: "http://img.b2bpic.net/free-photo/female-model-with-tattooed-body-wearing-protective-goggles-car-engine_613910-20311.jpg",
          imageAlt: "Silnik Dodge Durango 5.9L V8 Magnum",
        },
        {
          id: "gen2-3.7v6",
          name: "3.7L V6 PowerTech",
          price: "210 KM",
          variant: "325 Nm",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-bonnet_1170-1498.jpg",
          imageAlt: "Silnik Dodge Durango 3.7L V6 PowerTech",
        },
        {
          id: "gen2-4.7v8ho",
          name: "4.7L V8 PowerTech HO",
          price: "235-260 KM",
          variant: "415 Nm",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-metallic-gear_23-2151113172.jpg",
          imageAlt: "Silnik Dodge Durango 4.7L V8 PowerTech HO",
        },
        {
          id: "gen2-5.7hemi",
          name: "5.7L V8 HEMI",
          price: "335-340 KM",
          variant: "522 Nm",
          imageSrc: "http://img.b2bpic.net/free-photo/car-engine_1373-182.jpg",
          imageAlt: "Silnik Dodge Durango 5.7L V8 HEMI",
        },
        {
          id: "gen3-3.6v6",
          name: "3.6L V6 Pentastar",
          price: "293 KM",
          variant: "353 Nm",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-fog-machine-movie_23-2149066386.jpg",
          imageAlt: "Silnik Dodge Durango 3.6L V6 Pentastar",
        },
        {
          id: "gen3-5.7hemi-mds",
          name: "5.7L V8 HEMI MDS",
          price: "360 KM",
          variant: "528 Nm",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-fuel-level-gauge-vehicle_23-2150163683.jpg",
          imageAlt: "Silnik Dodge Durango 5.7L V8 HEMI MDS",
        },
        {
          id: "gen3-6.4srt",
          name: "6.4L V8 SRT 392",
          price: "475 KM",
          variant: "637 Nm",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-motorcycle-parts_23-2150704697.jpg",
          imageAlt: "Silnik Dodge Durango 6.4L V8 SRT 392",
        },
        {
          id: "gen3-6.2hellcat",
          name: "6.2L V8 Hellcat Supercharged",
          price: "717 KM",
          variant: "881 Nm",
          imageSrc: "http://img.b2bpic.net/free-photo/superhero-car-vintage-style_23-2151636205.jpg",
          imageAlt: "Silnik Dodge Durango 6.2L V8 Hellcat Supercharged",
        },
      ]}
      title="Przegląd silników według generacji"
      description="Szczegółowy opis silników dostępnych w każdej generacji Dodge Durango, wraz z ich kluczowymi parametrami i charakterystycznymi cechami."
    />
  </div>

  <div id="engines-comparison" data-section="engines-comparison">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "comp-3.9v6",
          tag: "3.9L V6 Magnum",
          price: "175 KM",
          period: "1997-2003",
          featuresTitle: "Dane techniczne",
          features: [
            "Pojemność: 3.9L",
            "Moment: 305 Nm",
            "Generacja: 1",
            "Oznaczenie klapy: brak",
          ],
          button: {
            text: "Zobacz",
          },
        },
        {
          id: "comp-3.7v6",
          tag: "3.7L V6 PowerTech",
          price: "210 KM",
          period: "2004-2009",
          featuresTitle: "Dane techniczne",
          features: [
            "Pojemność: 3.7L",
            "Moment: 325 Nm",
            "Generacja: 2",
            "Oznaczenie klapy: brak",
          ],
          button: {
            text: "Zobacz",
          },
        },
        {
          id: "comp-4.7v8",
          tag: "4.7L V8 PowerTech",
          price: "230 KM",
          period: "1997-2003",
          featuresTitle: "Dane techniczne",
          features: [
            "Pojemność: 4.7L",
            "Moment: 400 Nm",
            "Generacja: 1",
            "Oznaczenie klapy: '4.7'",
          ],
          button: {
            text: "Zobacz",
          },
        },
        {
          id: "comp-4.7v8ho",
          tag: "4.7L V8 PowerTech HO",
          price: "235-260 KM",
          period: "2004-2009",
          featuresTitle: "Dane techniczne",
          features: [
            "Pojemność: 4.7L",
            "Moment: 415 Nm",
            "Generacja: 2",
            "Oznaczenie klapy: '4.7'",
          ],
          button: {
            text: "Zobacz",
          },
        },
        {
          id: "comp-5.9v8",
          tag: "5.9L V8 Magnum",
          price: "245 KM",
          period: "1997-2003",
          featuresTitle: "Dane techniczne",
          features: [
            "Pojemność: 5.9L",
            "Moment: 455 Nm",
            "Generacja: 1",
            "Oznaczenie klapy: brak",
          ],
          button: {
            text: "Zobacz",
          },
        },
        {
          id: "comp-3.6v6",
          tag: "3.6L V6 Pentastar",
          price: "293 KM",
          period: "2011-2024",
          featuresTitle: "Dane techniczne",
          features: [
            "Pojemność: 3.6L",
            "Moment: 353 Nm",
            "Generacja: 3",
            "Oznaczenie klapy: brak",
          ],
          button: {
            text: "Zobacz",
          },
        },
        {
          id: "comp-5.7hemi",
          tag: "5.7L V8 HEMI",
          price: "335-340 KM",
          period: "2004-2009",
          featuresTitle: "Dane techniczne",
          features: [
            "Pojemność: 5.7L",
            "Moment: 522 Nm",
            "Generacja: 2",
            "Oznaczenie klapy: 'HEMI 5.7'",
          ],
          button: {
            text: "Zobacz",
          },
        },
        {
          id: "comp-5.7hemi-mds",
          tag: "5.7L V8 HEMI MDS",
          price: "360 KM",
          period: "2011-2024",
          featuresTitle: "Dane techniczne",
          features: [
            "Pojemność: 5.7L",
            "Moment: 528 Nm",
            "Generacja: 3",
            "Oznaczenie klapy: 'HEMI 5.7'",
          ],
          button: {
            text: "Zobacz",
          },
        },
        {
          id: "comp-6.4srt",
          tag: "6.4L V8 SRT 392",
          price: "475 KM",
          period: "2011-2024",
          featuresTitle: "Dane techniczne",
          features: [
            "Pojemność: 6.4L",
            "Moment: 637 Nm",
            "Generacja: 3",
            "Oznaczenie klapy: 'SRT 392'",
          ],
          button: {
            text: "Zobacz",
          },
        },
        {
          id: "comp-6.2hellcat",
          tag: "6.2L V8 Hellcat Supercharged",
          price: "717 KM",
          period: "2011-2024",
          featuresTitle: "Dane techniczne",
          features: [
            "Pojemność: 6.2L",
            "Moment: 881 Nm",
            "Generacja: 3",
            "Oznaczenie klapy: 'SRT Hellcat'",
          ],
          button: {
            text: "Zobacz",
          },
        },
      ]}
      title="Master porównawczy silników"
      description="Kompleksowa tabela porównawcza wszystkich silników Dodge Durango, od mocy po moment obrotowy i generację, w której były dostępne."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="DODGE DURANGO"
      columns={[
        {
          title: "Nawigacja",
          items: [
            {
              label: "Strona Główna",
              href: "/",
            },
            {
              label: "Wyposażenie",
              href: "/wyposazenie",
            },
            {
              label: "Silniki",
              href: "/silniki",
            },
          ],
        },
        {
          title: "Generacje",
          items: [
            {
              label: "1. Generacja (DN)",
              href: "/#generations",
            },
            {
              label: "2. Generacja (HB)",
              href: "/#generations",
            },
            {
              label: "3. Generacja (WD)",
              href: "/#generations",
            },
          ],
        },
        {
          title: "Kontakt",
          items: [
            {
              label: "O nas",
              href: "#",
            },
            {
              label: "Polityka Prywatności",
              href: "#",
            },
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
