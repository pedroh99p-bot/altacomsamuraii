import type { Dictionary } from "../types";

export const en: Dictionary = {
  common: {
    brand: "Altinha com Samurai",
    brandShort: "Altinha",
    brandSuffix: "com Samurai",
    instructor: 'Wallace "Samurai" Costa',
    beach: "Praia do Pontal",
    neighborhood: "Recreio dos Bandeirantes",
    reference: "Posto 12",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    google: "Google",
    notInformed: "Not provided",
    production: "Produced by Montana Tech Lab",
  },
  languages: {
    label: "Select language",
    serviceLabel: "Service",
    options: {
      "pt-BR": "Brazilian Portuguese",
      en: "English",
      es: "Spanish",
    },
  },
  topbar: {
    ariaLabel: "Quick information",
    items: [
      "PT • EN • ES",
      "Praia do Pontal",
      "Posto 12",
      "Classes every day",
      "Beginners welcome",
      "Training at your pace",
    ],
  },
  preloader: {
    text: "Preparing your experience...",
  },
  navigation: {
    experience: "The experience",
    quiz: "Quiz",
    specialist: "The specialist",
    practical: "How it works",
    location: "Location",
    faq: "FAQ",
  },
  header: {
    navAria: "Main navigation",
    mobileNavAria: "Mobile menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    headerWhatsApp: "WhatsApp",
    mobileWhatsApp: "Book on WhatsApp",
    whatsappMessage:
      "Hi, Samurai! I found the classes through the website and I would like to know how I can get started.",
  },
  hero: {
    eyebrow: "Classes at Praia do Pontal • Posto 12",
    title: "Learn altinha with someone who",
    titleHighlight: "lives the beach.",
    body:
      "Classes for first-timers, beginners who want more confidence, and players ready to improve on the sand.",
    primaryCta: "Book on WhatsApp",
    secondaryCta: "Find the right class",
    chipsAria: "Main benefits",
    benefits: [
      "Beginners welcome",
      "All levels",
      "Adaptive pace",
      "Praia do Pontal",
    ],
    whatsappMessage:
      "Hi, Samurai! I found the classes through the website and I would like to know how I can get started at Praia do Pontal.",
  },
  introVideo: {
    eyebrow: "Feel the experience",
    title: "Discover the beach sport that turns energy into movement.",
    body:
      "Altinha brings technique, connection, fun, and progress into a beach setting that is part of the experience.",
    cta: "I want my first class",
    controls: "Video controls",
    pause: "Pause video",
    play: "Play video",
    unmute: "Turn sound on",
    mute: "Mute video",
    note: "Technique, beach, and movement in a practical experience.",
    whatsappMessage:
      "Hi, Samurai! I watched the experience video on the website and I want to take my first class at Praia do Pontal.",
  },
  rollers: {
    one: {
      items: [
        "Beginners welcome",
        "Praia do Pontal",
        "All levels",
        "PT • EN • ES",
        "Adaptive pace",
      ],
      label:
        "Beginners welcome, Praia do Pontal, All levels, PT, EN, ES, Adaptive pace",
    },
    two: {
      items: [
        "Technique",
        "Confidence",
        "Community",
        "Progress",
        "Beach energy",
        "Training at your pace",
      ],
      label:
        "Technique, Confidence, Community, Progress, Beach energy, Training at your pace",
    },
    three: {
      items: [
        "Your first class can start here",
        "Talk to Samurai",
        "Praia do Pontal",
        "Start at your pace",
        "Beginners welcome",
      ],
      label:
        "Your first class can start here, Talk to Samurai, Praia do Pontal, Start at your pace, Beginners welcome",
    },
  },
  quiz: {
    eyebrow: "Quick intake",
    title: "Find the right class for you.",
    description:
      "Answer in under a minute and take a useful WhatsApp message with your level, goal, preferred format, and main question.",
    cover: {
      eyebrow: "Quick assessment",
      title: "Find the right class for your current level.",
      text:
        "Answer a few quick questions so Samurai can understand your level, goal, and the best way for you to get started.",
      factsAria: "Quick assessment summary",
      facts: [
        "5 quick questions",
        "Takes less than 1 minute",
        "Personalized guidance",
      ],
      startButton: "Start now",
      progress: "questions before your guidance",
    },
    startTitle: "Start with where you are today.",
    startText:
      "There is no right answer. Your answers simply make the conversation with Samurai easier.",
    startButton: "Start quiz",
    resultLabel: "Result",
    send: "Send answers to Samurai",
    back: "Back",
    restart: "Restart",
    questionProgress: "Question {current} of {total}",
    progressLabel: "Progress {progress}%",
    hint: "Choose an answer to continue",
    advancing: "Moving on...",
    autoAdvance: "Auto advance",
    notInformed: "Not provided",
    questions: [
      {
        id: "level",
        question: "What is your level today?",
        options: [
          { id: "never", label: "I have never played", emoji: "⚽" },
          { id: "starting", label: "I am just starting", emoji: "🌱" },
          { id: "practice", label: "I already practice a little", emoji: "🔥" },
          { id: "technical", label: "I want to improve technique", emoji: "🎯" },
        ],
      },
      {
        id: "goal",
        question: "What is your main goal?",
        options: [
          { id: "learn", label: "Learn from zero", emoji: "🧩" },
          { id: "confidence", label: "Play with more confidence", emoji: "💪" },
          { id: "technique", label: "Improve my technique", emoji: "📈" },
          { id: "questions", label: "Ask questions before going", emoji: "💬" },
        ],
      },
      {
        id: "format",
        question: "How do you imagine starting?",
        options: [
          { id: "solo", label: "By myself", emoji: "👤" },
          { id: "pair", label: "With another person", emoji: "👥" },
          { id: "group", label: "In a group", emoji: "🏖️" },
          { id: "unsure", label: "I am not sure yet", emoji: "🤔" },
        ],
      },
      {
        id: "period",
        question: "Which period usually works best?",
        options: [
          { id: "morning", label: "Morning", emoji: "🌅" },
          { id: "late_afternoon", label: "Late afternoon", emoji: "🌇" },
          { id: "flexible", label: "I am flexible", emoji: "🔄" },
        ],
      },
      {
        id: "concern",
        question: "What creates the most doubt or insecurity?",
        options: [
          { id: "pace", label: "Not keeping up", emoji: "⚡" },
          { id: "shyness", label: "Feeling shy to start", emoji: "😅" },
          { id: "technique_gap", label: "Lack of technique", emoji: "🧠" },
          { id: "how", label: "I want to understand how it works", emoji: "💬" },
        ],
      },
    ],
    labels: {
      level: "My level",
      goal: "My goal",
      format: "I prefer to start",
      period: "Best period",
      concern: "My main question",
    },
    results: {
      technique: {
        title: "You seem ready for a class focused on technique.",
        text:
          "The idea is to observe your current game and adjust foundations like touch, posture, control, and reading the circle.",
        recommendedProfile: "Improve technique",
      },
      confidence: {
        title: "Building confidence can make joining the circle feel easier.",
        text:
          "The training helps you build range, understand the rhythm of the ball, and practice with more security.",
        recommendedProfile: "Gain confidence",
      },
      zero: {
        title: "You can start with a class adapted to your moment.",
        text:
          "Even without experience, the class organizes the basics so you can build confidence, understand the ball, and progress on the sand.",
        recommendedProfile: "Start from zero",
      },
    },
    whatsappIntro: "Hi, Samurai! I completed the quick intake on the website.",
    whatsappOutro: "I would like to understand how the classes work.",
  },
  specialist: {
    eyebrow: "The specialist",
    title: "Learn with someone who lives the beach every day.",
    body:
      'Wallace "Samurai" Costa combines real practice on the sand, reading each student level, and clear guidance to turn insecurity into real progress.',
    imageAlt: "Wallace Samurai Costa on the beach with a dog",
    captionName: 'Wallace "Samurai" Costa',
    captionText: "Altinha, beach, and practical guidance",
    locationBadge: "Posto 12 • Praia do Pontal",
    metricsAria: "Confirmed metrics",
    metrics: [
      {
        value: 3,
        suffix: "",
        label: "Service languages",
        proof: "Confirmed in business.serviceFacts.languages",
      },
      {
        value: 1,
        suffix: "h",
        label: "Average duration",
        proof: "Confirmed in business.serviceFacts.duration",
      },
      {
        value: 7,
        suffix: "",
        label: "Days per week",
        proof: "Confirmed in business.serviceFacts.frequency",
      },
    ],
    features: [
      {
        title: "Training at your pace",
        text: "The class starts from your current moment and moves forward calmly.",
      },
      {
        title: "Practical reading on the sand",
        text: "Simple corrections help you understand the ball and your body.",
      },
    ],
    cta: "I want to talk to Samurai",
    whatsappMessage:
      "Hi, Samurai! I saw your presentation on the website and I want to understand which class matches my level.",
  },
  community: {
    eyebrow: "Community",
    title: "A community that progresses together.",
    body:
      "People at different levels sharing the same energy, learning, and enjoying the beach.",
    imageAlt:
      "Altinha com Samurai group gathered at Praia do Pontal after an activity",
    testimonialsTitle: "Real reviews",
    noTestimonials:
      "Authorized Google reviews have not been added yet. The carousel stays hidden until real data exists.",
    cta: "I want to live this experience",
    whatsappMessage:
      "Hi, Samurai! I saw the community experience on the website and I would like to understand how to join the classes.",
  },
  testimonials: {
    carouselAria: "Authorized reviews",
    googleReview: "Google review",
    starsLabel: "{rating} out of 5 stars",
    previous: "Previous review",
    next: "Next review",
    dots: "Review indicators",
    dot: "Go to review {index}",
  },
  practical: {
    eyebrow: "How it works",
    title: "Everything you need to know before reaching the sand.",
    body:
      "Contact is direct, the training respects your level, and final details are confirmed on WhatsApp before the first class.",
    stepsAria: "Steps to get started",
    steps: [
      {
        number: "01",
        title: "Message on WhatsApp",
        text: "The first contact is direct, with no long form and no bureaucracy.",
      },
      {
        number: "02",
        title: "Share your level and goal",
        text:
          "Say if you are starting, already practice, or want to improve a technical point.",
      },
      {
        number: "03",
        title: "Receive guidance",
        text:
          "Samurai suggests the best path for your first experience on the sand.",
      },
      {
        number: "04",
        title: "Go to your first class",
        text:
          "Meeting details are confirmed in the conversation according to your availability.",
      },
    ],
    firstClass: {
      eyebrow: "Your first class",
      title: "Guidance on the sand, adaptive pace, and class materials.",
      text:
        "The experience happens at Praia do Pontal, in Recreio dos Bandeirantes, near Posto 12. You can start by yourself and confirm the meeting point in the conversation.",
    },
    facts: [
      { label: "Average duration", value: "About one hour" },
      { label: "Location", value: "Praia do Pontal, near Posto 12" },
      { label: "Levels", value: "From first contact to players who already play" },
      { label: "Periods", value: "Early and late afternoon" },
      { label: "Languages", value: "PT, EN, and ES" },
    ],
    checklistTitle: "What to bring",
    checklist: [
      "Beachwear",
      "Sunscreen",
      "Willingness to train on the sand",
      "Meeting point confirmation",
    ],
    primaryCta: "Book my first class",
    secondaryCta: "Retake the quick intake",
    whatsappMessage:
      "Hi, Samurai! I saw the class details on the website and would like to understand which option makes sense for me.",
  },
  classProfiles: {
    heading: "Choose by your moment",
    ariaLabel: "Class profile carousel",
    previous: "Previous profile",
    next: "Next profile",
    dots: "Profile indicators",
    dot: "Go to profile {index}",
    progress: "Profile {current} of {total}",
    audienceLabel: "Who it is for",
    profiles: {
      zero: {
        title: "Start from zero",
        description:
          "For anyone who has never practiced and wants to learn the first movements with calm and safety.",
        audience: "You have never played or feel shy about joining the circle.",
        cta: "I want to start from zero",
        whatsappMessage:
          "Hi, Samurai! I am interested in starting from zero and would like to understand how the first class at Praia do Pontal works.",
      },
      confidence: {
        title: "Gain confidence",
        description:
          "For anyone who has tried before or is starting and wants to feel lighter on the sand.",
        audience: "You have had some contact with altinha but still play with insecurity.",
        cta: "I want more confidence",
        whatsappMessage:
          "Hi, Samurai! I am interested in gaining confidence in altinha and would like to know which path makes sense for me.",
      },
      technique: {
        title: "Improve technique",
        description:
          "For anyone who already practices a little and wants to adjust touch, posture, and control.",
        audience: "You already play or train and want to improve specific foundations.",
        cta: "I want to improve technique",
        whatsappMessage:
          "Hi, Samurai! I am interested in improving my technique and would like to know which class matches my moment.",
      },
    },
  },
  location: {
    eyebrow: "Location",
    title: "Your training happens facing the sea.",
    body:
      "Classes happen at Praia do Pontal, in Recreio, near Posto 12. The exact point is confirmed in the conversation to make your arrival easier.",
    meetingLabel: "Meeting point",
    meetingPoint: "Praia do Pontal, Posto 12 area",
    neighborhoodAndCity: "Recreio dos Bandeirantes, Rio de Janeiro",
    exactNote: "Exact point confirmed on WhatsApp before class.",
    route: "Open route",
    cta: "Confirm point on WhatsApp",
    mapTitle: "Approximate map of Praia do Pontal, Posto 12 area",
    mapPendingTitle: "Map pending confirmation.",
    mapPendingText:
      "The confirmed reference is Praia do Pontal, Recreio dos Bandeirantes, Posto 12 area.",
    whatsappMessage:
      "Hi, Samurai! I want to confirm the class meeting point at Praia do Pontal, Posto 12 area.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Direct answers before messaging.",
    text:
      "The answers below use only confirmed information. Price, availability, and format are aligned in the conversation.",
    cta: "Ask on WhatsApp",
    whatsappMessage:
      "Hi, Samurai! I read the FAQ and would like to ask a question about the altinha classes.",
    items: [
      {
        id: "preciso-saber-jogar",
        question: "Do I need to know how to play already?",
        answer:
          "No. The class works for people who have never played and for those who already practice and want to improve technically.",
      },
      {
        id: "posso-ir-sozinho",
        question: "Can I go alone?",
        answer:
          "Yes. WhatsApp contact helps understand your moment and guide the best way to start.",
      },
      {
        id: "preciso-levar-bola",
        question: "Do I need to bring a ball?",
        answer:
          "The class includes guidance and materials used in the experience. If there is any specific need, it is confirmed in the conversation.",
      },
      {
        id: "o-que-vestir",
        question: "What should I wear?",
        answer: "Wear comfortable beachwear and sun protection, such as sunscreen.",
      },
      {
        id: "quanto-tempo-dura",
        question: "How long does the class last?",
        answer: "The average duration is about one hour.",
      },
      {
        id: "onde-acontece",
        question: "Where does it happen?",
        answer:
          "Classes happen at Praia do Pontal, in Recreio dos Bandeirantes, near Posto 12. The exact point is confirmed on WhatsApp.",
      },
      {
        id: "periodos",
        question: "Which periods are available?",
        answer:
          "Times are mainly early and late afternoon. Real availability is confirmed in the conversation.",
      },
      {
        id: "valor",
        question: "How do I find out the price?",
        answer:
          "Options and conditions are shared through WhatsApp according to the most suitable format.",
      },
      {
        id: "idiomas",
        question: "Is service available in other languages?",
        answer: "Yes. Service can be provided in Portuguese, English, and Spanish.",
      },
      {
        id: "agendar",
        question: "How do I book?",
        answer:
          "Send a WhatsApp message, share your level and goal, and receive guidance to arrange the first class.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Start on the sand",
    title: "Your first step forward can start on the sand.",
    text:
      "It does not matter if you have never played or already practice. The first step is to talk to Samurai and understand the best way to begin.",
    primary: "Talk to Samurai on WhatsApp",
    secondary: "Find the right class",
    visualTop: "Praia do Pontal",
    visualStrong: "Start at your pace",
    whatsappMessage:
      "Hi, Samurai! I want to book through WhatsApp and understand how to start at Praia do Pontal.",
  },
  footer: {
    description:
      "Altinha classes at Praia do Pontal, in Recreio dos Bandeirantes, with adaptive training and direct WhatsApp contact.",
    whatsappMessage:
      "Hi, Samurai! I came from the website footer and want to know how the classes work.",
    navigationTitle: "Navigation",
    infoTitle: "Information",
    serviceLanguages: "Service in PT, EN, and ES",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    cookiePreferences: "Cookie preferences",
  },
  floating: {
    ariaLabel: "Message Altinha com Samurai on WhatsApp",
    message:
      "Hi, Samurai! I came from the floating button on the website and want to understand how the altinha classes work.",
  },
  consent: {
    eyebrow: "Privacy",
    title: "Control your cookies.",
    text:
      "We use essential cookies for the site to work. Analytics and marketing only run if you allow them. You can change this in the footer.",
    privacyLink: "View privacy policy",
    optionsAria: "Cookie preferences",
    essentialTitle: "Essential",
    essentialText: "Required for browsing and security.",
    analyticsTitle: "Analytics",
    analyticsText: "Helps understand sections, CTAs, and campaign source.",
    marketingTitle: "Marketing",
    marketingText: "Allows media pixels when a real ID is configured.",
    reject: "Reject",
    customize: "Customize",
    save: "Save preferences",
    accept: "Accept",
  },
  privacy: {
    metadataTitle: "Privacy policy",
    back: "Back to the landing page",
    eyebrow: "Privacy",
    title: "Initial privacy policy",
    intro:
      "This page describes the privacy structure of the Altinha com Samurai website. It does not replace final legal validation because legal name, tax ID, privacy email, and formal retention periods still need confirmation.",
    sections: [
      {
        title: "Data you provide",
        text:
          "When you message on WhatsApp or use the website quiz, you may provide level, goal, schedule preference, questions, and contact details inside the conversation itself.",
      },
      {
        title: "Technical data",
        text:
          "With your consent, the site may record navigation events and campaign source to understand which sections help the contact.",
      },
      {
        title: "Cookies and consent",
        text:
          "Essential cookies keep basic functionality. Analytics and marketing are only activated after your choice.",
      },
      {
        title: "Sharing",
        text:
          "Integrations such as Google Analytics, Google Tag Manager, or Meta Pixel only load if real IDs are configured and compatible consent exists.",
      },
      {
        title: "Pending points",
        text:
          "Legal name, tax ID, privacy email, and formal retention periods still need to be confirmed by the brand owner.",
      },
    ],
  },
  whatsapp: {
    defaultMessage:
      "Hi, Samurai! I found the classes through the website and I would like to know how I can get started.",
    quizAnswersTitle: "Quick intake answers:",
    campaignTitle: "Campaign source:",
    origin: "Click origin",
    section: "Section",
    cta: "CTA",
  },
};
