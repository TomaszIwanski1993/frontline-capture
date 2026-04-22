import { Language } from "@/contexts/LanguageContext";

const en = {
    nav: {
      problem: "Problem",
      howItWorks: "How It Works",
      outcomes: "Outcomes",
      industries: "Industries",
      whyQuantum: "Why Quantum",
      careers: "Careers",
      contact: "Contact",
      bookDemo: "Book a Demo",
      toggleMenu: "Toggle menu",
    },
    hero: {
      eyebrow: "Your best operators won't be here forever.",
      titleA: "The operating system for",
      titleB: "frontline knowledge",
      sub: "Quantum captures how your best operators work and transforms it into structured, real-time guidance for every shift.",
      cta1: "Book a Demo",
      cta2: "How It Works",
    },
    positioning: {
      eyebrow: "The Quantum Layer",
      title: "A new operational layer for frontline work",
      body: "Most operations depend on undocumented human expertise. Quantum captures how work is actually done, structures it with AI in seconds, and delivers it to operators in real time.",
    },
    problem: {
      eyebrow: "The Problem",
      title: "Operational knowledge is disappearing — and it's costing you",
      sub: "When experienced operators leave, performance drops, errors increase, and onboarding slows down. Most of what they know has never been documented.",
      cards: [
        {
          title: "Knowledge lives in people, not systems",
          description:
            "Critical operational know-how exists only in the heads of experienced operators. When they leave, that knowledge disappears. No workaround fixes this.",
        },
        {
          title: "Onboarding is slow and inconsistent",
          description:
            "New operators learn through shadowing and trial-and-error. The result: months of wasted ramp-up time, inconsistent quality, and repeated mistakes.",
        },
        {
          title: "Loss of experience creates operational risk",
          description:
            "Every retirement, resignation, or shift change disrupts output. Dependence on a small number of key individuals weakens the entire operation.",
        },
      ],
      stat1: "of operational knowledge is",
      stat1Bold: "undocumented",
      stat2: "to",
      stat2Bold: "replace one experienced operator",
    },
    pullQuote: '"Your operation is only as strong as what your best operator remembers."',
    howItWorks: {
      eyebrow: "How It Works",
      title: "Three steps to retained knowledge",
      sub: "Built on AI that understands real-world workflows, not documents.",
      steps: [
        {
          title: "Capture",
          description:
            "Quantum records how experienced operators perform tasks in real time. It extracts the tacit knowledge that manuals and documentation never capture.",
        },
        {
          title: "Structure",
          description:
            "Raw expertise is instantly transformed into structured, actionable guidance: standardized, searchable, and ready to deploy across teams.",
        },
        {
          title: "Apply",
          description:
            "Operators receive step-by-step guidance in seconds during live work. Onboarding accelerates. Execution becomes consistent. Knowledge stays.",
        },
      ],
    },
    about: {
      eyebrow: "Why Quantum",
      title: "Quantum is designed for speed & scale",
      values: [
        {
          title: "Built for speed & scale",
          description:
            "Knowledge is captured in minutes and deployed instantly. No lengthy documentation projects — your team moves faster from day one.",
        },
        {
          title: "Let Quantum handle the manual work",
          description:
            "Our AI captures how your best operators work, structures it automatically, and delivers real-time guidance — at unlimited scale, across every shift.",
        },
        {
          title: "Consistent execution, instantly",
          description:
            "Every operator gets the same expert-level guidance. No guesswork, no variation — just reliable output across all lines and sites.",
        },
      ],
    },
    value: {
      eyebrow: "Outcomes",
      title: "Measurable impact on operations",
      sub: "Proven results from real industrial deployments.",
      items: [
        {
          metric: "30-40%",
          title: "Faster time-to-proficiency",
          description:
            "Quantum cuts onboarding time by 30-40%. New operators reach competence in weeks, guided by structured knowledge from your best performers.",
        },
        {
          metric: "Measurably",
          title: "Reduce variability across shifts and sites",
          description:
            "Every operator works from the same proven knowledge base. Execution becomes predictable. Quality stops depending on who's on shift.",
        },
        {
          metric: "Eliminated",
          title: "Single points of failure",
          description:
            "Critical knowledge no longer lives in a few experts' heads. Retirements and turnover stop disrupting operations.",
        },
        {
          metric: "Reduced",
          title: "Dependency on top-performing operators",
          description:
            "Quantum scales the expertise of your best people across every team and location. Their knowledge works even when they don't.",
        },
      ],
    },
    trust: {
      label: "Trusted by industrial teams",
      tags: ["Manufacturing", "Logistics", "FMCG", "Field Service"],
    },
    industries: {
      eyebrow: "Industries",
      title: "Wherever operations depend on human expertise",
      items: [
        {
          title: "Manufacturing",
          example:
            "Captures machine setup, changeover, and quality check expertise. Eliminates knowledge loss when veteran operators leave.",
        },
        {
          title: "FMCG",
          example:
            "Standardizes line operations, batch adjustments, and packaging know-how. Ensures consistency across every site and shift.",
        },
        {
          title: "Logistics & Warehousing",
          example:
            "Locks in picking sequences, equipment handling, and safety protocols. Deploys them instantly across all locations.",
        },
        {
          title: "Construction",
          example:
            "Preserves site setup procedures and safety compliance from experienced managers. Reduces risk from staff turnover.",
        },
        {
          title: "Field Service",
          example:
            "Delivers troubleshooting guides, maintenance routines, and client configs directly to technicians in the field.",
        },
      ],
    },
    pilot: {
      eyebrow: "Get Started",
      title: "Prove value in weeks, not months",
      body: "We deploy a focused pilot in your real environment. Fast setup, immediate results. You evaluate the impact before committing to anything.",
      points: [
        "2–4 week pilot on a single line or process",
        "Integrates with existing workflows — no IT overhaul",
        "Clear metrics to evaluate results objectively",
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
          a: "Quantum serves companies that depend on frontline operators: manufacturing plants, FMCG production lines, warehouses, construction sites, and field service teams. If your operations rely on experienced people whose knowledge isn't documented, Quantum solves that problem.",
        },
        {
          q: "Does this work in any factory environment?",
          a: "Yes. Quantum operates in real industrial conditions: production floors, cleanrooms, outdoor sites, and heavy industry. It integrates with your existing workflows and requires no specialized infrastructure or changes to your production setup.",
        },
        {
          q: "What exactly does Quantum capture?",
          a: "Quantum captures task demonstrations from experienced operators: the specific steps, sequences, adjustments, and decision points that define real operational knowledge. This is the tacit expertise that traditional documentation misses — how to feel when a machine runs correctly, which adjustments to make during changeover, what to watch for during quality checks.",
        },
        {
          q: "How do you handle data security and GDPR?",
          a: "Security is built into the architecture. All data is encrypted in transit and at rest, stored in EU-based infrastructure, and processed in full GDPR compliance. Quantum does not capture personal data or monitor individual performance. We sign data processing agreements with every client and meet specific requirements from IT and compliance teams.",
        },
        {
          q: "What results should we expect?",
          a: "Quantum reduces time-to-proficiency by 30-40% and delivers measurably more consistent task execution across shifts. When operational knowledge is structured and accessible, onboarding accelerates and execution quality improves. Every deployment confirms this pattern.",
        },
        {
          q: "How is Quantum different from a knowledge management tool?",
          a: "Knowledge tools are built for office work: documents, wikis, search. Quantum is built for frontline operations. It captures knowledge through operator demonstrations, not documentation. The result is practical, task-level guidance that operators actually use on the floor — not another system they ignore.",
        },
        {
          q: "Can we try before committing?",
          a: "Every engagement starts with a pilot: 2-4 weeks, focused on a single process or line. No long-term commitment. The pilot delivers concrete, measurable results you evaluate before deciding on broader deployment.",
        },
      ],
    },
    resources: {
      eyebrow: "Resources",
      title: "Insights & perspectives",
      more: "More articles coming soon.",
      items: [
        {
          category: "Insight",
          title: "The hidden cost of knowledge loss in manufacturing",
          description:
            "Why tacit knowledge is the most undervalued asset in industrial operations, and what happens when it disappears.",
        },
        {
          category: "Perspective",
          title: "Rethinking onboarding for frontline operators",
          description:
            "Traditional onboarding programs weren't designed for the pace and complexity of modern operations. A better approach exists.",
        },
        {
          category: "Analysis",
          title: "AI in operations: beyond automation",
          description:
            "How AI can support, not replace, human expertise in industrial environments. A practical framework.",
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
        about: "About",
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
    careers: {
      back: "Back to home",
      eyebrow: "Careers",
      title: "Join Our Team",
      empty: "No open roles at the moment",
      bodyA:
        "We're not actively hiring right now, but we're always interested in hearing from talented people. Feel free to reach out at",
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
      careers: "Kariera",
      contact: "Kontakt",
      bookDemo: "Umów demo",
      toggleMenu: "Otwórz menu",
    },
    hero: {
      eyebrow: "Twoi najlepsi operatorzy nie będą tu na zawsze.",
      titleA: "System operacyjny dla",
      titleB: "wiedzy produkcyjnej",
      sub: "Quantum rejestruje sposób pracy najlepszych operatorów i zamienia go w uporządkowane, dostępne na bieżąco wskazówki dla każdej zmiany.",
      cta1: "Umów demo",
      cta2: "Jak to działa",
    },
    positioning: {
      eyebrow: "Warstwa Quantum",
      title: "Nowa warstwa operacyjna dla pracy na hali",
      body: "Większość operacji opiera się na nieudokumentowanej wiedzy ludzi. Quantum rejestruje, jak praca naprawdę wygląda, w kilka sekund porządkuje ją z pomocą AI i przekazuje operatorom w czasie rzeczywistym.",
    },
    problem: {
      eyebrow: "Problem",
      title: "Wiedza operacyjna znika — i kosztuje cię to coraz więcej",
      sub: "Gdy odchodzi doświadczony operator, spada wydajność, rośnie liczba błędów, a wdrożenia trwają dłużej. Większość tego, co wie zespół, nigdy nie została spisana.",
      cards: [
        {
          title: "Wiedza zostaje w głowach, nie w systemach",
          description:
            "Krytyczne know-how mają tylko doświadczeni operatorzy. Kiedy odchodzą, znika razem z nimi. Nie da się tego obejść.",
        },
        {
          title: "Wdrożenie jest długie i niespójne",
          description:
            "Nowi operatorzy uczą się przez podpatrywanie i metodą prób i błędów. Efekt: miesiące powolnego rozruchu, niestabilna jakość i powtarzające się błędy.",
        },
        {
          title: "Utrata doświadczenia to ryzyko operacyjne",
          description:
            "Każda emerytura, odejście czy zmiana brygady zaburza produkcję. Zależność od kilku kluczowych osób osłabia całą operację.",
        },
      ],
      stat1: "wiedzy operacyjnej jest",
      stat1Bold: "nieudokumentowane",
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
            "Quantum nagrywa, jak doświadczeni operatorzy wykonują zadania na żywo. Wyłapuje wiedzę praktyczną, której nie zawiera żadna instrukcja.",
        },
        {
          title: "Strukturyzacja",
          description:
            "Surowe doświadczenie zamieniane jest w uporządkowane, gotowe do użycia wskazówki: ujednolicone, łatwe do wyszukania, gotowe do wdrożenia w zespołach.",
        },
        {
          title: "Zastosowanie",
          description:
            "Operator dostaje wskazówki krok po kroku w kilka sekund podczas pracy. Wdrożenie przyspiesza. Wykonanie staje się powtarzalne. Wiedza zostaje w firmie.",
        },
      ],
    },
    about: {
      eyebrow: "Dlaczego Quantum",
      title: "Quantum projektowany pod tempo i skalę",
      values: [
        {
          title: "Zbudowany pod tempo i skalę",
          description:
            "Wiedza powstaje w kilka minut i jest natychmiast dostępna. Żadnych długich projektów dokumentacyjnych — zespół działa szybciej od pierwszego dnia.",
        },
        {
          title: "Pracę manualną zostaw Quantum",
          description:
            "Nasza AI rejestruje sposób pracy najlepszych operatorów, automatycznie ją porządkuje i podaje wskazówki na bieżąco — bez limitu skali, na każdej zmianie.",
        },
        {
          title: "Spójne wykonanie, od razu",
          description:
            "Każdy operator dostaje wskazówki na poziomie eksperta. Bez zgadywania, bez różnic — przewidywalny wynik na wszystkich liniach i lokalizacjach.",
        },
      ],
    },
    value: {
      eyebrow: "Efekty",
      title: "Mierzalny wpływ na operacje",
      sub: "Sprawdzone wyniki z realnych wdrożeń przemysłowych.",
      items: [
        {
          metric: "30-40%",
          title: "Krótszy czas dochodzenia do biegłości",
          description:
            "Quantum skraca czas wdrożenia o 30-40%. Nowi operatorzy osiągają biegłość w kilka tygodni, prowadzeni wiedzą najlepszych w zespole.",
        },
        {
          metric: "Mierzalnie",
          title: "Mniejsza zmienność między zmianami i lokalizacjami",
          description:
            "Każdy operator pracuje z tej samej, sprawdzonej bazy wiedzy. Wykonanie staje się przewidywalne. Jakość przestaje zależeć od tego, kto jest na zmianie.",
        },
        {
          metric: "Eliminacja",
          title: "Pojedynczych punktów awarii",
          description:
            "Krytyczna wiedza nie zostaje już w głowach kilku ekspertów. Odejścia i rotacja przestają zaburzać produkcję.",
        },
        {
          metric: "Mniejsza",
          title: "Zależność od najlepszych operatorów",
          description:
            "Quantum przenosi doświadczenie najlepszych ludzi na każdy zespół i lokalizację. Ich wiedza działa nawet wtedy, gdy ich nie ma.",
        },
      ],
    },
    trust: {
      label: "Zaufali nam zespoły przemysłowe",
      tags: ["Produkcja", "Logistyka", "FMCG", "Serwis terenowy"],
    },
    industries: {
      eyebrow: "Branże",
      title: "Wszędzie, gdzie operacje opierają się na wiedzy ludzi",
      items: [
        {
          title: "Produkcja",
          example:
            "Rejestruje wiedzę o ustawieniach maszyn, przezbrojeniach i kontroli jakości. Zapobiega utracie know-how, gdy odchodzą doświadczeni operatorzy.",
        },
        {
          title: "FMCG",
          example:
            "Standaryzuje pracę na linii, regulacje partii i pakowanie. Zapewnia spójność na każdej zmianie i w każdej lokalizacji.",
        },
        {
          title: "Logistyka i magazyny",
          example:
            "Utrwala kolejność kompletacji, obsługę sprzętu i procedury BHP. Wdraża je natychmiast w każdej lokalizacji.",
        },
        {
          title: "Budownictwo",
          example:
            "Zachowuje procedury organizacji placu i wymogi BHP od doświadczonych kierowników. Ogranicza ryzyko związane z rotacją.",
        },
        {
          title: "Serwis terenowy",
          example:
            "Dostarcza technikom w terenie instrukcje diagnostyczne, harmonogramy serwisu i konfiguracje klientów.",
        },
      ],
    },
    pilot: {
      eyebrow: "Zacznij",
      title: "Udowodnij wartość w tygodnie, nie miesiące",
      body: "Wdrażamy ukierunkowany pilotaż w twoim realnym środowisku. Szybki start, natychmiastowe wyniki. Decyzję o dalszych krokach podejmujesz po ocenie efektów.",
      points: [
        "Pilotaż 2–4 tygodnie na jednej linii lub procesie",
        "Wpasowuje się w istniejące procesy — bez przebudowy IT",
        "Czytelne wskaźniki do obiektywnej oceny wyników",
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
          a: "Quantum jest dla firm, których praca opiera się na operatorach pierwszej linii: zakładów produkcyjnych, linii FMCG, magazynów, budów i zespołów serwisu terenowego. Jeśli twoja operacja zależy od doświadczonych ludzi, których wiedza nie jest spisana — Quantum to rozwiązuje.",
        },
        {
          q: "Czy to działa w każdej fabryce?",
          a: "Tak. Quantum działa w realnych warunkach przemysłowych: na halach produkcyjnych, w cleanroomach, na zewnątrz i w przemyśle ciężkim. Wpasowuje się w istniejące procesy i nie wymaga specjalistycznej infrastruktury ani zmian w produkcji.",
        },
        {
          q: "Co dokładnie rejestruje Quantum?",
          a: "Quantum rejestruje pokazy zadań wykonywane przez doświadczonych operatorów: konkretne kroki, sekwencje, regulacje i punkty decyzyjne, które tworzą realną wiedzę operacyjną. To wiedza praktyczna, której nie ma w dokumentacji — jak rozpoznać, że maszyna pracuje dobrze, jakie korekty wprowadzić przy przezbrojeniu, na co zwrócić uwagę przy kontroli jakości.",
        },
        {
          q: "Jak wygląda bezpieczeństwo danych i RODO?",
          a: "Bezpieczeństwo jest wbudowane w architekturę. Wszystkie dane są szyfrowane w transmisji i spoczynku, przechowywane w infrastrukturze w UE i przetwarzane zgodnie z RODO. Quantum nie zbiera danych osobowych ani nie monitoruje wyników pojedynczych osób. Z każdym klientem podpisujemy umowę powierzenia i spełniamy wymogi działów IT i compliance.",
        },
        {
          q: "Jakich efektów można się spodziewać?",
          a: "Quantum skraca czas dochodzenia do biegłości o 30-40% i zauważalnie zwiększa spójność wykonania zadań między zmianami. Gdy wiedza operacyjna jest uporządkowana i dostępna, wdrożenia idą szybciej, a jakość rośnie. Każde wdrożenie potwierdza ten schemat.",
        },
        {
          q: "Czym Quantum różni się od narzędzia do zarządzania wiedzą?",
          a: "Narzędzia do wiedzy są zrobione pod pracę biurową: dokumenty, wiki, wyszukiwarki. Quantum jest zrobiony pod pracę na hali. Rejestruje wiedzę przez pokazy operatorów, nie przez dokumentację. Efekt to praktyczne wskazówki na poziomie zadania, z których operatorzy realnie korzystają — a nie kolejny system, który zostaje pomijany.",
        },
        {
          q: "Czy można sprawdzić bez zobowiązań?",
          a: "Każda współpraca zaczyna się od pilotażu: 2-4 tygodnie, jeden proces lub linia. Bez długoterminowych zobowiązań. Pilotaż daje konkretne, mierzalne wyniki, na podstawie których decydujesz o szerszym wdrożeniu.",
        },
      ],
    },
    resources: {
      eyebrow: "Materiały",
      title: "Analizy i perspektywy",
      more: "Wkrótce więcej artykułów.",
      items: [
        {
          category: "Analiza",
          title: "Ukryty koszt utraty wiedzy w produkcji",
          description:
            "Dlaczego wiedza praktyczna jest najbardziej niedocenianym aktywem w przemyśle i co dzieje się, gdy znika.",
        },
        {
          category: "Perspektywa",
          title: "Nowe podejście do wdrożeń operatorów pierwszej linii",
          description:
            "Klasyczne programy onboardingowe nie były projektowane pod tempo i złożoność współczesnych operacji. Da się to zrobić lepiej.",
        },
        {
          category: "Analiza",
          title: "AI w operacjach: poza automatyzacją",
          description:
            "Jak AI może wspierać, a nie zastępować, wiedzę ludzi w środowisku przemysłowym. Praktyczne ramy.",
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
    careers: {
      back: "Powrót do strony głównej",
      eyebrow: "Kariera",
      title: "Dołącz do zespołu",
      empty: "Aktualnie nie prowadzimy rekrutacji",
      bodyA:
        "Nie rekrutujemy aktywnie, ale chętnie poznamy zdolnych ludzi. Napisz na",
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
