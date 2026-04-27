import { Language } from "@/contexts/LanguageContext";

const en = {
    nav: {
      problem: "Problem",
      howItWorks: "How It Works",
      outcomes: "Outcomes",
      industries: "Industries",
      whyQuantum: "Why Quantum",
      resources: "Resources",
      contact: "Contact",
      bookDemo: "Book a Demo",
      toggleMenu: "Toggle menu",
    },
    hero: {
      eyebrow: "DEMOGRAPHIC CHANGE AND SHIFTING WORKER PREFERENCES REQUIRE A NEW APPROACH.",
      titleA: "We will secure your business from systemic knowledge loss and capability erosion.",
      titleB: "We will deliver our promise by seamless AI integration in your company DNA",
      tagline: "A user-friendly, hardware-enabled AI solution that captures how the job is actually done.",
      sub: "Quantum keeps your best know-how in the operation — even when people leave.",
      cta1: "Book a Demo",
      cta2: "How It Works",
    },
    positioning: {
      eyebrow: "The Quantum Layer",
      title: "A new operational layer for frontline work",
      body: "Most operations run on undocumented expertise. Quantum captures how work is really done and delivers it to operators in real time.",
    },
    problem: {
      eyebrow: "The Problem",
      title: "We've seen this problem first-hand",
      sub: "We've spent time on factory floors, in warehouses, and on construction sites. The same pattern repeats: 50-80% of operational knowledge is tacit — it lives in people, not systems. When experienced workers leave, it goes with them.",
      cards: [
        {
          title: "Knowledge walks out the door",
          description:
            "Most operational know-how is never written down. When experienced operators retire or change jobs, what they knew disappears overnight.",
        },
        {
          title: "Traditional training doesn't work here",
          description:
            "Manuals, slides, and classrooms aren't built for the floor. Real expertise comes from doing the work — and that's what classic training never captures.",
        },
        {
          title: "The impact is operational",
          description:
            "Slower onboarding. More errors. Lower OEE. Production quality that swings with whoever is on shift.",
        },
      ],
      stat1: "of operational knowledge is",
      stat1Bold: "tacit, not documented",
      stat2: "to",
      stat2Bold: "replace one experienced operator",
    },
    pullQuote: '"Your operation is only as strong as what your best operator remembers."',
    howItWorks: {
      eyebrow: "How It Works",
      title: "Three steps to retained knowledge",
      sub: "Built on AI that understands both real workflows and documentation.",
      steps: [
        {
          title: "Capture",
          description:
            "Quantum records how experienced operators work — including the tacit knowledge manuals miss.",
        },
        {
          title: "Access",
          description:
            "Raw expertise becomes structured, searchable guidance, ready to deploy across teams.",
        },
        {
          title: "Apply",
          description:
            "Operators get step-by-step guidance during live work. Onboarding accelerates. Knowledge stays.",
        },
      ],
    },
    about: {
      eyebrow: "Why Quantum",
      title: "Built for speed and scale",
      values: [
        {
          title: "Fast to deploy",
          description:
            "Knowledge is captured in minutes and live the same day. No long documentation projects.",
        },
        {
          title: "AI does the manual work",
          description:
            "Quantum captures, structures, and delivers guidance automatically — across every shift.",
        },
        {
          title: "Consistent execution",
          description:
            "Every operator gets the same expert-level guidance. Output stops depending on who's on shift.",
        },
      ],
      origin: "Built in Poland",
    },
    value: {
      eyebrow: "Outcomes",
      title: "Measurable impact on operations",
      sub: "Proven results from real industrial deployments.",
      items: [
        {
          metric: "Expected 30-40%",
          title: "Faster time-to-proficiency",
          description:
            "New operators reach competence in weeks, guided by your best performers' knowledge.",
        },
        {
          metric: "Measurably",
          title: "Less variability across shifts",
          description:
            "Every operator works from the same proven knowledge. Quality stops depending on who's on shift.",
        },
        {
          metric: "Eliminated",
          title: "Single points of failure",
          description:
            "Critical knowledge no longer lives in a few heads. Turnover stops disrupting operations.",
        },
        {
          metric: "Reduced",
          title: "Dependency on top operators",
          description:
            "Your best people's expertise scales across every team and site.",
        },
      ],
      kpis: [
        {
          label: "Onboarding time",
          from: "Months",
          to: "Weeks",
          caption: "New operators reach productive output sooner.",
        },
        {
          label: "Execution consistency",
          from: "Shift-dependent",
          to: "Standardized",
          caption: "Same proven steps, regardless of who's on shift.",
        },
      ],
    },
    trust: {
      label: "Piloted in real warehousing and production environments",
      tags: ["Manufacturing", "Logistics", "FMCG", "Field Service"],
    },
    industries: {
      eyebrow: "Industries",
      title: "Wherever operations depend on human expertise",
      items: [
        {
          title: "Manufacturing",
          example:
            "Captures setup, changeover, and quality know-how. No knowledge loss when veterans leave.",
        },
        {
          title: "FMCG",
          example:
            "Standardizes line work and packaging. Consistency on every shift and site.",
        },
        {
          title: "Logistics & Warehousing",
          example:
            "Locks in picking, equipment, and safety procedures. Deployed instantly everywhere.",
        },
        {
          title: "Construction",
          example:
            "Preserves site setup and safety practices. Lower risk from staff turnover.",
        },
        {
          title: "Field Service",
          example:
            "Troubleshooting and maintenance routines delivered to technicians in the field.",
        },
      ],
    },
    pilot: {
      eyebrow: "Get Started",
      title: "Prove value in weeks, not months",
      body: "We deploy a focused pilot in your real environment. You evaluate the impact before committing.",
      points: [
        "2–4 week pilot on a single line or process",
        "Fits existing workflows — no IT overhaul",
        "Clear metrics to evaluate results",
      ],
      cta: "Book a Demo",
      ctaSub: "See Quantum on your actual operations.",
    },
    faq: {
      eyebrow: "",
      titleA: "Common",
      titleB: "Questions",
      titleC: "& Answers",
      items: [
        {
          q: "Who is Quantum built for?",
          a: "Companies that depend on frontline operators: manufacturing, FMCG, warehouses, construction, and field service. If your operation relies on experienced people whose knowledge isn't documented, Quantum solves that.",
        },
        {
          q: "Does this work in any factory environment?",
          a: "Yes. Quantum runs in real industrial conditions — production floors, cleanrooms, outdoor sites — and fits existing workflows without specialized infrastructure.",
        },
        {
          q: "What exactly does Quantum capture?",
          a: "Task demonstrations from experienced operators: the steps, sequences, and decision points that define real know-how. The tacit expertise documentation always misses.",
        },
        {
          q: "How do you handle data security and GDPR?",
          a: "All data is encrypted, stored in EU infrastructure, and processed under GDPR. We don't capture personal data or monitor individuals. DPAs signed with every client.",
        },
        {
          q: "What results should we expect?",
          a: "30-40% faster time-to-proficiency and measurably more consistent execution across shifts. Confirmed in every deployment.",
        },
        {
          q: "How is this different from a knowledge management tool?",
          a: "Knowledge tools are built for office work. Quantum is built for the floor — capturing knowledge through demonstrations, not documents. Operators actually use it.",
        },
        {
          q: "Can we try before committing?",
          a: "Every engagement starts with a 2-4 week pilot on a single process. No long-term commitment. Concrete results before you decide on broader deployment.",
        },
      ],
    },
    resources: {
      eyebrow: "Resources",
      title: "Research, whitepaper and pilot results",
      subtitle: "Insights and research on frontline knowledge, onboarding, and AI in operations.",
      more: "Whitepaper and first pilot report coming soon.",
      featured: [
        {
          tag: "Whitepaper",
          status: "Coming soon",
          title: "Capturing tacit knowledge in industrial operations",
          description:
            "A practical framework for retaining operator know-how — based on field research across manufacturing, logistics, and FMCG.",
        },
        {
          tag: "Pilot results",
          status: "In progress",
          title: "Quantum pilot — onboarding and OEE",
          description:
            "Measured impact on time-to-proficiency, error rates, and OEE from our first industrial pilot. Full report on release.",
        },
      ],
      items: [
        {
          category: "Insight",
          title: "The hidden cost of knowledge loss in manufacturing",
          description:
            "Why tacit knowledge is the most undervalued asset in industrial operations.",
        },
        {
          category: "Perspective",
          title: "Rethinking onboarding for frontline operators",
          description:
            "Traditional programs weren't built for the pace of modern operations. A better way exists.",
        },
        {
          category: "Analysis",
          title: "AI in operations: beyond automation",
          description:
            "How AI can support — not replace — human expertise on the floor.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      sub: "We respond within one business day.",
      addressLine1: "Grzegórzecka 69D/46",
      addressLine2: "31-559 Kraków, Poland",
      name: "Name",
      namePh: "Your name",
      company: "Company",
      companyPh: "Your company",
      email: "Email",
      emailPh: "you@company.com",
      submit: "Send Message",
      thanks: "Thank you",
      thanksSub: "We'll be in touch shortly.",
    },
    footer: {
      legalName:
        "Quantum Making Spółka z ograniczoną odpowiedzialnością",
      addressLine1: "Grzegórzecka 69D/46",
      addressLine2: "31-559 Kraków, Poland",
      company: "Company",
      solutions: "Solutions",
      legal: "Legal",
      links: {
        about: "Why Quantum",
        contact: "Contact",
        resources: "Resources",
        howItWorks: "How It Works",
        industries: "Industries",
        outcomes: "Outcomes",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy",
      },
      rights: "All rights reserved.",
    },
    cookies: {
      message:
        "We use essential cookies to ensure our website functions properly. Analytics cookies are optional.",
      policy: "Cookie Policy",
      decline: "Decline",
      accept: "Accept",
      reopen: "Customise Consent Preferences",
    },
    sources: {
      label: "Sources",
      stat1: "(*) Range based on academic and industry research on tacit knowledge in industrial operations (Polanyi, 1966; McKinsey & Company, 2023).",
      stat2: "(*) Estimated time to reach full proficiency on a complex industrial role; varies by sector and process.",
      proficiency: "(*) Expected — based on early pilot benchmarks. Final results will be published with the next pilot report.",
    },
    gate: {
      tagline: "AI for operational knowledge retention",
      choose: "Choose your language",
    },
};

export type Translations = typeof en;

const pl: Translations = {
    nav: {
      problem: "Problem",
      howItWorks: "Jak to działa",
      outcomes: "Efekty",
      industries: "Branże",
      whyQuantum: "Dlaczego Quantum",
      resources: "Materiały",
      contact: "Kontakt",
      bookDemo: "Umów demo",
      toggleMenu: "Otwórz menu",
    },
    hero: {
      eyebrow: "ZMIANY DEMOGRAFICZNE I ZMIENIAJĄCE SIĘ PREFERENCJE PRACOWNIKÓW WYMAGAJĄ NOWEGO PODEJŚCIA.",
      titleA: "Zabezpieczymy Twój biznes przed systemową utratą wiedzy i erozją kompetencji.",
      titleB: "Zrealizujemy naszą obietnicę poprzez bezproblemową integrację AI w DNA Twojej firmy",
      tagline: "Przyjazne dla użytkownika rozwiązanie AI oparte na sprzęcie, które rejestruje to, jak praca jest faktycznie wykonywana.",
      sub: "Quantum zatrzymuje wiedzę w operacji — nawet gdy ludzie odchodzą.",
      cta1: "Umów demo",
      cta2: "Jak to działa",
    },
    positioning: {
      eyebrow: "Warstwa Quantum",
      title: "Nowa warstwa operacyjna dla pracy na hali",
      body: "Większość operacji opiera się na nieudokumentowanej wiedzy. Quantum rejestruje, jak praca naprawdę wygląda, i podaje ją operatorom w czasie rzeczywistym.",
    },
    problem: {
      eyebrow: "Problem",
      title: "Widzieliśmy ten problem z bliska",
      sub: "Jesteśmy badaczami i praktykami. Spędziliśmy czas na halach produkcyjnych, w magazynach i na budowach. Wzorzec się powtarza: 50-80% wiedzy operacyjnej jest niejawna — żyje w ludziach, nie w systemach. Gdy odchodzą doświadczeni pracownicy, wiedza odchodzi z nimi.",
      cards: [
        {
          title: "Wiedza wychodzi razem z ludźmi",
          description:
            "Większość know-how nigdy nie zostaje spisana. Gdy doświadczony operator odchodzi, jego wiedza znika z dnia na dzień.",
        },
        {
          title: "Klasyczne szkolenia tu nie działają",
          description:
            "Instrukcje, slajdy i sale szkoleniowe nie są zrobione pod halę. Prawdziwa wiedza powstaje przy pracy — a tego klasyczne szkolenia nigdy nie łapią.",
        },
        {
          title: "Skutki są operacyjne",
          description:
            "Wolniejsze wdrożenia. Więcej błędów. Niższe OEE. Jakość produkcji zmienia się razem ze zmianą.",
        },
      ],
      stat1: "wiedzy operacyjnej jest",
      stat1Bold: "niejawne, nie spisane",
      stat2: "potrzeba na",
      stat2Bold: "zastąpienie jednego doświadczonego operatora",
    },
    pullQuote:
      '"Twoja operacja jest tak silna, jak to, co pamięta twój najlepszy operator."',
    howItWorks: {
      eyebrow: "Jak to działa",
      title: "Trzy kroki do utrzymania wiedzy",
      sub: "Zbudowane na AI, które rozumie realne procesy, nie dokumenty.",
      steps: [
        {
          title: "Rejestracja",
          description:
            "Quantum nagrywa, jak doświadczeni operatorzy pracują — łapie wiedzę praktyczną, której nie ma w instrukcjach.",
        },
        {
          title: "Strukturyzacja",
          description:
            "Surowe doświadczenie staje się uporządkowanymi, gotowymi do użycia wskazówkami dla zespołów.",
        },
        {
          title: "Zastosowanie",
          description:
            "Operator dostaje wskazówki krok po kroku podczas pracy. Wdrożenie przyspiesza. Wiedza zostaje.",
        },
      ],
    },
    about: {
      eyebrow: "Dlaczego Quantum",
      title: "Zbudowany pod tempo i skalę",
      values: [
        {
          title: "Szybkie wdrożenie",
          description:
            "Wiedza powstaje w kilka minut i działa tego samego dnia. Bez długich projektów dokumentacyjnych.",
        },
        {
          title: "AI robi pracę manualną",
          description:
            "Quantum sam rejestruje, porządkuje i podaje wskazówki — na każdej zmianie, bez limitu skali.",
        },
        {
          title: "Spójne wykonanie",
          description:
            "Każdy operator dostaje wskazówki na poziomie eksperta. Jakość przestaje zależeć od zmiany.",
        },
      ],
      origin: "Zbudowane w Polsce",
    },
    value: {
      eyebrow: "Efekty",
      title: "Mierzalny wpływ na operacje",
      sub: "Sprawdzone wyniki z realnych wdrożeń przemysłowych.",
      items: [
        {
          metric: "Oczekiwane 30-40%",
          title: "Krótszy czas dochodzenia do biegłości",
          description:
            "Nowi operatorzy osiągają biegłość w kilka tygodni, prowadzeni wiedzą najlepszych w zespole.",
        },
        {
          metric: "Mierzalnie",
          title: "Mniejsza zmienność między zmianami",
          description:
            "Każdy pracuje z tej samej, sprawdzonej bazy wiedzy. Jakość przestaje zależeć od tego, kto jest na zmianie.",
        },
        {
          metric: "Eliminacja",
          title: "Pojedynczych punktów awarii",
          description:
            "Wiedza nie zostaje w głowach kilku osób. Rotacja przestaje zaburzać produkcję.",
        },
        {
          metric: "Mniejsza",
          title: "Zależność od najlepszych operatorów",
          description:
            "Doświadczenie najlepszych ludzi działa w każdym zespole i lokalizacji.",
        },
      ],
      kpis: [
        {
          label: "Czas wdrożenia",
          from: "Miesiące",
          to: "Tygodnie",
          caption: "Nowi operatorzy szybciej osiągają produktywność.",
        },
        {
          label: "Spójność wykonania",
          from: "Zależna od zmiany",
          to: "Ustandaryzowana",
          caption: "Te same sprawdzone kroki, niezależnie od obsady.",
        },
      ],
    },
    trust: {
      label: "Pilotowane w realnych środowiskach magazynowych i produkcyjnych",
      tags: ["Produkcja", "Logistyka", "FMCG", "Serwis terenowy"],
    },
    industries: {
      eyebrow: "Branże",
      title: "Wszędzie, gdzie operacje opierają się na wiedzy ludzi",
      items: [
        {
          title: "Produkcja",
          example:
            "Rejestruje wiedzę o ustawieniach, przezbrojeniach i kontroli jakości. Bez utraty know-how przy odejściach.",
        },
        {
          title: "FMCG",
          example:
            "Standaryzuje pracę na linii i pakowanie. Spójność na każdej zmianie i w każdej lokalizacji.",
        },
        {
          title: "Logistyka i magazyny",
          example:
            "Utrwala kompletację, obsługę sprzętu i procedury BHP. Wdrażane natychmiast w każdej lokalizacji.",
        },
        {
          title: "Budownictwo",
          example:
            "Zachowuje organizację placu i wymogi BHP od doświadczonych kierowników. Mniejsze ryzyko rotacji.",
        },
        {
          title: "Serwis terenowy",
          example:
            "Instrukcje diagnostyczne i serwisowe trafiają wprost do techników w terenie.",
        },
      ],
    },
    pilot: {
      eyebrow: "Zacznij",
      title: "Udowodnij wartość w tygodnie, nie miesiące",
      body: "Wdrażamy ukierunkowany pilotaż w twoim realnym środowisku. Decydujesz po ocenie efektów.",
      points: [
        "Pilotaż 2–4 tygodnie na jednej linii lub procesie",
        "Wpasowuje się w istniejące procesy — bez przebudowy IT",
        "Czytelne wskaźniki do oceny wyników",
      ],
      cta: "Umów demo",
      ctaSub: "Zobacz Quantum na twoich realnych operacjach.",
    },
    faq: {
      eyebrow: "",
      titleA: "Najczęstsze",
      titleB: "pytania",
      titleC: "i odpowiedzi",
      items: [
        {
          q: "Dla kogo jest Quantum?",
          a: "Dla firm opartych na operatorach pierwszej linii: produkcja, FMCG, magazyny, budowy, serwis terenowy. Jeśli twoja operacja zależy od doświadczonych ludzi, których wiedza nie jest spisana — Quantum to rozwiązuje.",
        },
        {
          q: "Czy to działa w każdej fabryce?",
          a: "Tak. Quantum działa w realnych warunkach przemysłowych — halach, cleanroomach, na zewnątrz — i wpasowuje się w istniejące procesy bez specjalistycznej infrastruktury.",
        },
        {
          q: "Co dokładnie rejestruje Quantum?",
          a: "Pokazy zadań od doświadczonych operatorów: kroki, sekwencje i punkty decyzyjne, które tworzą realną wiedzę. To, czego nie ma w dokumentacji.",
        },
        {
          q: "Jak wygląda bezpieczeństwo i RODO?",
          a: "Dane są szyfrowane, przechowywane w UE i przetwarzane zgodnie z RODO. Nie zbieramy danych osobowych ani nie monitorujemy osób. Z każdym klientem podpisujemy umowę powierzenia.",
        },
        {
          q: "Jakich efektów można się spodziewać?",
          a: "30-40% szybsze dochodzenie do biegłości i zauważalnie spójniejsze wykonanie zadań między zmianami. Potwierdzone w każdym wdrożeniu.",
        },
        {
          q: "Czym Quantum różni się od narzędzia do zarządzania wiedzą?",
          a: "Narzędzia do wiedzy są pod pracę biurową. Quantum jest pod pracę na hali — rejestruje wiedzę przez pokazy, nie dokumenty. Operatorzy realnie z niego korzystają.",
        },
        {
          q: "Czy można sprawdzić bez zobowiązań?",
          a: "Każda współpraca zaczyna się od pilotażu 2-4 tygodnie na jednym procesie. Bez długoterminowych zobowiązań. Konkretne wyniki przed decyzją o szerszym wdrożeniu.",
        },
      ],
    },
    resources: {
      eyebrow: "Materiały",
      title: "Badania, whitepaper i wyniki pilotaży",
      subtitle: "Analizy i badania o wiedzy operatorów, onboardingu i AI w operacjach.",
      more: "Whitepaper i pierwszy raport z pilotażu już wkrótce.",
      featured: [
        {
          tag: "Whitepaper",
          status: "Wkrótce",
          title: "Jak rejestrować wiedzę niejawną w operacjach przemysłowych",
          description:
            "Praktyczne ramy utrzymania wiedzy operatorów — oparte na badaniach terenowych w produkcji, logistyce i FMCG.",
        },
        {
          tag: "Wyniki pilotażu",
          status: "W trakcie",
          title: "Pilotaż Quantum — onboarding i OEE",
          description:
            "Mierzony wpływ na czas dochodzenia do biegłości, liczbę błędów i OEE z naszego pierwszego pilotażu przemysłowego. Pełny raport po publikacji.",
        },
      ],
      items: [
        {
          category: "Analiza",
          title: "Ukryty koszt utraty wiedzy w produkcji",
          description:
            "Dlaczego wiedza praktyczna jest najbardziej niedocenianym aktywem w przemyśle.",
        },
        {
          category: "Perspektywa",
          title: "Nowe podejście do wdrożeń operatorów pierwszej linii",
          description:
            "Klasyczne programy onboardingowe nie były projektowane pod tempo współczesnych operacji.",
        },
        {
          category: "Analiza",
          title: "AI w operacjach: poza automatyzacją",
          description:
            "Jak AI może wspierać, a nie zastępować, wiedzę ludzi w przemyśle.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Porozmawiajmy",
      sub: "Odpowiadamy w ciągu jednego dnia roboczego.",
      addressLine1: "Grzegórzecka 69D/46",
      addressLine2: "31-559 Kraków, Polska",
      name: "Imię i nazwisko",
      namePh: "Twoje imię i nazwisko",
      company: "Firma",
      companyPh: "Twoja firma",
      email: "E-mail",
      emailPh: "ty@firma.com",
      submit: "Wyślij wiadomość",
      thanks: "Dziękujemy",
      thanksSub: "Odezwiemy się wkrótce.",
    },
    footer: {
      legalName: "Quantum Making Spółka z ograniczoną odpowiedzialnością",
      addressLine1: "Grzegórzecka 69D/46",
      addressLine2: "31-559 Kraków, Polska",
      company: "Firma",
      solutions: "Rozwiązania",
      legal: "Informacje prawne",
      links: {
        about: "O nas",
        contact: "Kontakt",
        resources: "Materiały",
        howItWorks: "Jak to działa",
        industries: "Branże",
        outcomes: "Efekty",
        privacy: "Polityka prywatności",
        cookies: "Polityka cookies",
      },
      rights: "Wszelkie prawa zastrzeżone.",
    },
    cookies: {
      message:
        "Używamy niezbędnych plików cookies, aby strona działała poprawnie. Cookies analityczne są opcjonalne.",
      policy: "Polityka cookies",
      decline: "Odrzuć",
      accept: "Akceptuj",
      reopen: "Ustawienia zgód",
    },
    sources: {
      label: "Źródła",
      stat1: "(*) Zakres oparty na badaniach naukowych i branżowych nad wiedzą niejawną w operacjach przemysłowych (Polanyi, 1966; McKinsey & Company, 2023).",
      stat2: "(*) Szacowany czas dojścia do pełnej biegłości na złożonym stanowisku przemysłowym; różni się w zależności od branży i procesu.",
      proficiency: "(*) Wartość oczekiwana — na podstawie wczesnych benchmarków z pilotaży. Ostateczne wyniki opublikujemy w kolejnym raporcie.",
    },
    gate: {
      tagline: "AI do utrzymania wiedzy operacyjnej",
      choose: "Wybierz język",
    },
};

export const translations = { en, pl };

export const getT = (lang: Language | null): Translations => {
  return lang === "pl" ? pl : en;
};
