import { Language } from "@/contexts/LanguageContext";

const en = {
    nav: {
      problem: "Business Need",
      howItWorks: "How It Works",
      outcomes: "Outcomes",
      industries: "Industries",
      whyQuantum: "Why Us",
      resources: "Resources",
      contact: "Contact",
      bookDemo: "Book a Call",
      toggleMenu: "Toggle menu",
    },
    hero: {
      eyebrow: "DEMOGRAPHIC CHANGE AND SHIFTING WORKER PREFERENCES REQUIRE A NEW APPROACH.",
      titleA: "Secure your business from knowledge loss and capability erosion",
      titleB: "through seamless AI integration.",
      tagline: "",
      sub: "Quantum Making keeps your best know-how in the operation — even when people leave.",
      cta1: "Book a Call",
      cta2: "How It Works",
    },
    positioning: {
      eyebrow: "The Quantum Making Layer",
      title: "A new operational layer for frontline work",
      body: "Most operations run on undocumented expertise. Quantum Making captures how work is really done - so it can be scaled, improved, and retained.",
    },
    problem: {
      eyebrow: "The Business Need",
      title: "We’ve seen this challenge first-hand",
      sub: "We’ve spent time on factory floors, in warehouses, and on construction sites. The same pattern repeats: the majority of operational knowledge is tacit—it lives in people, not systems. When experienced workers leave, it goes with them.",
      cards: [
        {
          title: "Knowledge walks out the door",
          description:
            "Most operational know-how is never written down. When experienced operators retire or change jobs, what they knew disappears overnight.",
        },
        {
          title: "Workforce shortages threaten the business",
          description:
            "The shortage of technical competencies is increasing; workforce challenges are putting pressure on the results and sustainability of current business models.",
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
    pullQuote: '"Your operation is only as strong as your operators’ experience."',
    howItWorks: {
      eyebrow: "How It Works",
      title: "Three steps to retained knowledge",
      sub: "Built on AI that understands both real workflows and documentation.",
      steps: [
        {
          title: "Contextualize",
          description:
            "You provide documentation, workflows, procedures, and SOPs to help the AI understand your business and processes.",
        },
        {
          title: "Capture",
          description:
            "Quantum Making records how experienced operators work — including the tacit knowledge manuals miss.",
        },
        {
          title: "Document",
         description:
            "Raw expertise becomes structured, searchable guidance, ready to deploy across teams that will make knowledge available for onboarding, training, and continuous improvement.",
        },
      ],
      summaryTitle: "Industrial-grade compliance, powered by AI",
      summary:
        "A user-friendly, hands-free solution that captures expert know-how directly on the shop floor through video and voice analysis. It combines real-time object recognition and interpretation with analysis of user comments. No keyboards, no interruptions, and no manual write-ups—ensuring industrial compliance for ISO-certified operations, powered by AI.",
      imageAlt: "Operator using a hands-free RealWear headset on the shop floor",
    },
    about: {
      eyebrow: "Why Us",
      title: "Built for speed and scale",
      subtitle: "We are highly flexible and adapt our solution and delivery model to your specific needs.",
      values: [
        {
          title: "Fast to deploy",
          description:
            "Knowledge is captured in minutes and live the same day. No long documentation projects.",
        },
        {
          title: "Ready-to-use documentation",
          description:
            "Our solution prepares detailed, ready-to-use documentation built from how the work is actually done.",
        },
        {
          title: "For Who",
          description:
            "Production, Logistics, Constructions, Maintenance, HR.",
        },
      ],
      origin: "Built in Poland",
    },
    value: {
      eyebrow: "Outcomes",
      title: "Measurable impact on operations",
      sub: "What teams can expect when tacit knowledge becomes shared, structured, and reusable.",
      items: [
        {
          metric: "Weeks, not months",
          title: "Faster time-to-proficiency",
          description:
            "New operators ramp up guided by your top performers' know-how, instead of trial and error.",
        },
        {
          metric: "Shift-to-shift",
          title: "More consistent execution",
          description:
            "Every operator works from the same proven steps, so output stops swinging with the roster.",
        },
        {
          metric: "No single point of failure",
          title: "Knowledge stays in the operation",
          description:
            "Critical know-how lives in the system, not in a few heads — turnover stops disrupting work.",
        },
        {
          metric: "Less reliance on heroes",
          title: "Top-operator expertise, scaled",
          description:
            "Your best people's expertise is available to every team and site, not just their own shift.",
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
      cta: "Book a Call",
      ctaSub: "See Quantum Making on your actual operations.",
    },
    faq: {
      eyebrow: "",
      titleA: "Common",
      titleB: "Questions",
      titleC: "& Answers",
      items: [
        {
          q: "Who is Quantum Making built for?",
          a: "Companies that depend on frontline operators—such as manufacturing, FMCG, maintenance, warehousing, construction, and field service. If your operations rely on experienced people whose knowledge isn’t documented, Quantum Making can solve that.",
        },
        {
          q: "Does this work in any factory environment?",
          a: "Yes. Quantum Making runs in real industrial conditions — production floors, cleanrooms, outdoor sites — and fits existing workflows without specialized infrastructure.",
        },
        {
          q: "What exactly does Quantum Making capture?",
          a: "Task demonstrations from experienced operators: the steps, sequences, and decision points that define real know-how. The tacit expertise documentation always misses.",
        },
        {
          q: "How do you handle data security and GDPR?",
          a: "All data is encrypted, stored in EU infrastructure, and processed under GDPR. We don't capture personal data or monitor individuals. DPAs signed with every client.",
        },
        {
          q: "What results should we expect?",
          a: "Shorter time-to-proficiency for new operators and more consistent execution across shifts.",
        },
        {
          q: "How is this different from a knowledge management tool?",
          a: "Knowledge tools are built for office work. Quantum Making is built for the floor — capturing knowledge through demonstrations, not documents. Operators actually use it.",
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
          title: "Quantum Making pilot — onboarding and OEE",
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
      challenge: "Tell us about your challenge",
      challengePh: "What's the main problem you're trying to solve?",
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
        about: "Why Us",
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
    bookDemo: {
      title: "Book a Call",
      subtitle: "30-minute intro call. We'll show Quantum Making on operations like yours.",
      duration: "30 minutes",
      location: "Google Meet (link shared on confirmation)",
      timezone: "All times in your local timezone",
      pickDate: "1. Pick a date",
      pickTime: "2. Pick a time",
      noSlots: "No times available on this day. Try another date.",
      pickDateFirst: "Select a date to see available times.",
      loading: "Loading availability…",
      back: "Back",
      next: "Continue",
      details: "3. Your details",
      name: "Full name",
      namePh: "Jane Doe",
      email: "Work email",
      emailPh: "you@company.com",
      company: "Company",
      companyPh: "Your company",
      notes: "Anything we should know? (optional)",
      notesPh: "What you'd like to see, current operation context, etc.",
      submit: "Confirm booking",
      submitting: "Booking…",
      successTitle: "You're booked",
      successBody: "A calendar invite with the Google Meet link is on its way to your inbox.",
      successWhen: "When",
      successTimezone: "Timezone",
      successHostTz: "Host time (Europe/Warsaw)",
      successDuration: "Duration",
      successMeeting: "Meeting",
      successMeetingValue: "Google Meet (link in your invite)",
      successAddToCalendar: "Add to calendar",
      successJoin: "Join with Google Meet",
      successNextTitle: "What happens next",
      successNext1: "Check your inbox for the calendar invite — accept it to confirm.",
      successNext2: "We'll send a short prep email 24 hours before with what to expect.",
      successNext3: "Need to reschedule? Just reply to the invite or email us.",
      close: "Close",
      fallbackTitle: "Online booking is briefly unavailable",
      fallbackBody:
        "Our calendar isn't responding right now. Email us and we'll find a time within one business day.",
      fallbackEmail: "Email info@quantummaking.com",
      slotTaken: "That time was just booked. Please pick another slot.",
      genericError: "Something went wrong. Please try again or email info@quantummaking.com.",
      errors: {
        nameRequired: "Please enter your full name.",
        emailRequired: "Please enter your work email.",
        emailInvalid: "Please enter a valid email address.",
        companyRequired: "Please enter your company name.",
      },
    },
};

export type Translations = typeof en;

const pl: Translations = {
    nav: {
      problem: "Potrzeba biznesowa",
      howItWorks: "Jak to działa",
      outcomes: "Efekty",
      industries: "Branże",
      whyQuantum: "Dlaczego my",
      resources: "Materiały",
      contact: "Kontakt",
      bookDemo: "Umów rozmowę",
      toggleMenu: "Otwórz menu",
    },
    hero: {
      eyebrow: "ZMIANY DEMOGRAFICZNE I EWOLUUJĄCE OCZEKIWANIA PRACOWNIKÓW WYMAGAJĄ NOWEGO PODEJŚCIA.",
      titleA: "Zabezpiecz swój biznes przed utratą wiedzy i doświadczenia",
      titleB: "dzięki płynnej integracji z AI.",
      tagline: "",
      sub: "Wiedza zostaje, nawet gdy ludzie odchodzą.",
      cta1: "Umów rozmowę",
      cta2: "Jak to działa",
    },
    positioning: {
      eyebrow: "Warstwa Quantum Making",
      title: "Nowe podejście do utrzymania i rozwoju doskonałości operacyjnej",
      body: "Większość procesów opiera się na wiedzy i doświadczeniu, które nie są nigdzie zapisane. Quantum Making dokumentuje, jak praca wygląda naprawdę.",
    },
    problem: {
      eyebrow: "Potrzeba biznesowa",
      title: "Poznaliśmy ten problem z bliska",
      sub: "Pracując w środowiskach produkcyjnych zaobserwowaliśmy ten sam schemat: kluczowa wiedza operacyjna nie trafia do systemów — zostaje w głowach ludzi. A gdy doświadczeni pracownicy odchodzą, firma traci ją razem z nimi.",
      cards: [
        {
          title: "Wiedza odchodzi razem z ludźmi",
          description:
            "Większość know-how nie jest nigdzie spisana. Gdy doświadczeni operatorzy odchodzą, wiedza znika razem z nimi.",
        },
        {
          title: "Wyniki operacyjne",
          description:
            "Brakuje kompetencji technicznych, a wyzwania kadrowe coraz mocniej wpływają na wyniki i stabilność biznesu.",
        },
        {
          title: "Skutki widać w operacjach",
          description:
            "Wolniejsze wdrożenia nowych pracowników. Więcej błędów. Niższe OEE. Jakość i efektywność produkcji mocno uzależniona od czynnika ludzkiego.",
        },
      ],
      stat1: "wiedzy operacyjnej jest",
      stat1Bold: "niejawne, nie spisane",
      stat2: "potrzeba na",
      stat2Bold: "zastąpienie jednego doświadczonego operatora",
    },
    pullQuote:
      '"Twoja doskonałość operacyjna jest tak silna, jak duże jest doświadczenie Twoich operatorów."',
    howItWorks: {
      eyebrow: "Jak to działa",
      title: "Trzy kroki do zachowania wiedzy",
      sub: "Oparte na AI, które rozumie i interpretuje realne procesy.",
      steps: [
        {
          title: "Kontekstualizacja",
          description:
            "Zamieniamy doświadczenie w uporządkowaną, gotową do użycia wiedzę.",
        },
        {
          title: "Rejestracja",
          description:
            "Quantum Making rejestruje jak pracują doświadczeni operatorzy — uchwytując wiedzę praktyczną, której nie znajdziesz w instrukcjach.",
        },
        {
          title: "Dokumentacja",
         description:
            "Zamieniamy doświadczenie w uporządkowaną, gotową do użycia wiedzę — do wdrożeń, szkoleń i ciągłego doskonalenia.",
        },
      ],
      summaryTitle: "Gotowość przemysłowa klasy ISO, napędzana przez AI",
      summary:
        "Przyjazne dla użytkownika, bezdotykowe rozwiązanie, które przechwytuje wiedzę ekspercką bezpośrednio na hali produkcyjnej poprzez analizę wideo i głosu. Łączy rozpoznawanie i interpretację obiektów w czasie rzeczywistym z analizą komentarzy użytkownika. Bez klawiatur, bez rozpraszania w czasie pracy i ręcznego spisywania. Zapewnia zgodność z normami ISO. Wszystko razem zintegrowane z AI.",
      imageAlt: "Operator korzystający z bezdotykowego zestawu RealWear na hali produkcyjnej",
    },
    about: {
      eyebrow: "Dlaczego my",
      title: "Szybkoskalowalne rozwiązanie",
      subtitle: "Szybko i skutecznie dopasujemy nasze rozwiązanie oraz model biznesowy do potrzeb Twojej organizacji",
      values: [
        {
          title: "Szybkie wdrożenie",
          description:
            "Dokumentacja powstaje w kilka minut i jest gotowa do użycia od razu.",
        },
        {
          title: "Dla kogo",
          description:
            "\n",
        },
        {
          title: "Bezdotykowo, w miejscu pracy",
          description:
            "Dokumentowanie odbywa się bez ingerencji w pracę — bezpośrednio na hali, tam gdzie naprawdę się ona odbywa.",
        },
      ],
      origin: "Zbudowane w Polsce",
    },
    value: {
      eyebrow: "Efekty",
      title: "Realny, mierzalny wpływ na doskonałość operacyjną",
      sub: "Co zyskują zespoły, gdy wiedza staje się wspólna, uporządkowana i dostępna dla wszystkich?",
      items: [
        {
          metric: "Wdrożenie w dni, nie miesiące",
          title: "\n",
          description:
            "Nowi operatorzy uczą się na wiedzy najlepszych — zamiast metodą prób i błędów.",
        },
        {
          metric: "Spójność między zmianami",
          title: "\n",
          description:
            "Każdy pracuje według tych samych sprawdzonych kroków — wynik nie zależy już od tego, kto jest na zmianie.",
        },
        {
          metric: "Bez pojedynczych punktów awarii",
          title: "\n",
          description:
            "Kluczowe know-how jest w systemie, nie tylko w głowach pracowników — rotacja przestaje zaburzać pracę.",
        },
        {
          metric: "Mniej zależności od wysiłku jednostki",
          title: "Wiedza najlepszych dostępna dla wszystkich",
          description:
            "Doświadczenie najlepszych jest dostępne dla wszystkich zespołów.",
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
      label: "SPRAWDZONE W REALNYCH ŚRODOWISKACH MAGAZYNOWYCH I PRODUKCYJNYCH",
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
      cta: "Umów rozmowę",
      ctaSub: "Zobacz Quantum Making na twoich realnych operacjach.",
    },
    faq: {
      eyebrow: "",
      titleA: "Najczęstsze",
      titleB: "pytania",
      titleC: "i odpowiedzi",
      items: [
        {
          q: "Dla kogo jest Quantum Making?",
          a: "Dla firm w produkcji, FMCG, logistyce, magazynach i budownictwie. Jeśli Twoje procesy zależą od doświadczonych ludzi, a ich wiedza praktyczna nie jest nigdzie zapisana - rozwiązanie oferowane przez Quantum Making jest dla Ciebie.",
        },
        {
          q: "Czy to działa w każdej fabryce?",
          a: "Tak. Quantum Making działa w realnych warunkach przemysłowych — na halach produkcyjnych i w magazynach — i łatwo dopasowuje się do istniejących procesów, bez potrzeby specjalistycznej infrastruktury.",
        },
        {
          q: "Co dokładnie rejestruje Quantum Making?",
          a: "Sposób wykonywania pracy przez doświadczonych operatorów — sekwencje zadań i decyzje, których nie znajdziesz w dokumentacji.",
        },
        {
          q: "Jak podchodzicie do bezpieczeństwa i RODO?",
          a: "Dane są szyfrowane, przechowywane w UE i przetwarzane zgodnie z RODO. Nie zbieramy danych osobowych ani nie śledzimy pracowników. Z każdym klientem podpisujemy indywidualną umowę powierzenia danych.",
        },
        {
          q: "Jakie efekty daje Quantum Making?",
          a: "Precyzyjna i realistyczna dokumentacja na temat Twoich procesów produkcyjnych i logistycznych.",
        },
        {
          q: "Czym Quantum Making różni się od innych narzędzi do zarządzania wiedzą w firmie?",
          a: "Klasyczne narzędzia są stworzone do pracy biurowej. Quantum Making działa w środowisku operacyjnym — rejestruje, jak praca naprawdę wygląda. Dzięki temu operatorzy i cała organizacja faktycznie mogą z tego skorzystać.",
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
          title: "Pilotaż Quantum Making — onboarding i OEE",
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
      sub: "Odezwiemy się w ciągu jednego dnia roboczego.",
      addressLine1: "Grzegórzecka 69D/46",
      addressLine2: "31-559 Kraków, Polska",
      name: "Imię i nazwisko",
      namePh: "Twoje imię i nazwisko",
      company: "Firma",
      companyPh: "Twoja firma",
      email: "E-mail",
      emailPh: "ty@firma.com",
      challenge: "Opowiedz nam o swoim wyzwaniu",
      challengePh: "Jaki problem chcesz rozwiązać?",
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
        about: "Dlaczego my",
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
    bookDemo: {
      title: "Umów rozmowę",
      subtitle: "30-minutowa rozmowa wprowadzająca. Pokażemy Quantum Making na operacjach takich jak Twoje.",
      duration: "30 minut",
      location: "Google Meet (link wysyłamy w potwierdzeniu)",
      timezone: "Godziny w Twojej lokalnej strefie czasowej",
      pickDate: "1. Wybierz datę",
      pickTime: "2. Wybierz godzinę",
      noSlots: "Brak wolnych godzin tego dnia. Wybierz inną datę.",
      pickDateFirst: "Wybierz datę, aby zobaczyć wolne godziny.",
      loading: "Ładuję dostępność…",
      back: "Wstecz",
      next: "Dalej",
      details: "3. Twoje dane",
      name: "Imię i nazwisko",
      namePh: "Jan Kowalski",
      email: "Służbowy e-mail",
      emailPh: "ty@firma.com",
      company: "Firma",
      companyPh: "Nazwa firmy",
      notes: "Coś, o czym powinniśmy wiedzieć? (opcjonalnie)",
      notesPh: "Co chcesz zobaczyć, kontekst operacji itp.",
      submit: "Potwierdź rezerwację",
      submitting: "Rezerwuję…",
      successTitle: "Rezerwacja potwierdzona",
      successBody: "Zaproszenie kalendarzowe z linkiem do Google Meet zaraz pojawi się w Twojej skrzynce.",
      successWhen: "Kiedy",
      successTimezone: "Strefa czasowa",
      successHostTz: "Czas po stronie hosta (Europe/Warsaw)",
      successDuration: "Czas trwania",
      successMeeting: "Spotkanie",
      successMeetingValue: "Google Meet (link w zaproszeniu)",
      successAddToCalendar: "Dodaj do kalendarza",
      successJoin: "Dołącz przez Google Meet",
      successNextTitle: "Co dalej",
      successNext1: "Sprawdź skrzynkę i zaakceptuj zaproszenie kalendarzowe, aby potwierdzić.",
      successNext2: "24 godziny przed spotkaniem wyślemy krótki e-mail przygotowawczy.",
      successNext3: "Potrzebujesz przełożyć? Odpowiedz na zaproszenie lub napisz do nas.",
      close: "Zamknij",
      fallbackTitle: "Rezerwacja online jest chwilowo niedostępna",
      fallbackBody:
        "Nasz kalendarz nie odpowiada. Napisz do nas, a znajdziemy termin w ciągu jednego dnia roboczego.",
      fallbackEmail: "Napisz na info@quantummaking.com",
      slotTaken: "Ta godzina została właśnie zajęta. Wybierz inny termin.",
      genericError: "Coś poszło nie tak. Spróbuj ponownie lub napisz na info@quantummaking.com.",
      errors: {
        nameRequired: "Podaj imię i nazwisko.",
        emailRequired: "Podaj służbowy adres e-mail.",
        emailInvalid: "Podaj prawidłowy adres e-mail.",
        companyRequired: "Podaj nazwę firmy.",
      },
    },
};

export const translations = { en, pl };

export const getT = (lang: Language | null): Translations => {
  return lang === "pl" ? pl : en;
};
