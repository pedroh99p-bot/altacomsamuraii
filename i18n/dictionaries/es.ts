import type { Dictionary } from "../types";

export const es: Dictionary = {
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
    notInformed: "No informado",
    production: "Producido por Montana Tech Lab",
  },
  languages: {
    label: "Seleccionar idioma",
    serviceLabel: "Atención",
    options: {
      "pt-BR": "Portugués de Brasil",
      en: "Inglés",
      es: "Español",
    },
  },
  topbar: {
    ariaLabel: "Información rápida",
    items: [
      "PT • EN • ES",
      "Praia do Pontal",
      "Posto 12",
      "Clases todos los días",
      "Principiantes bienvenidos",
      "Entrenamiento a tu ritmo",
    ],
  },
  preloader: {
    text: "Preparando tu experiencia...",
  },
  navigation: {
    experience: "La experiencia",
    quiz: "Quiz",
    specialist: "El especialista",
    practical: "Cómo funciona",
    location: "Ubicación",
    faq: "FAQ",
  },
  header: {
    navAria: "Navegación principal",
    mobileNavAria: "Menú móvil",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    headerWhatsApp: "WhatsApp",
    mobileWhatsApp: "Reservar por WhatsApp",
    whatsappMessage:
      "¡Hola, Samurai! Conocí las clases a través del sitio y me gustaría saber cómo puedo empezar.",
  },
  hero: {
    eyebrow: "Clases en Praia do Pontal • Posto 12",
    title: "Aprende altinha con quien",
    titleHighlight: "vive la playa.",
    body:
      "Clases para quien nunca jugó, principiantes que quieren confianza y quienes ya practican y quieren evolucionar en la arena.",
    primaryCta: "Reservar por WhatsApp",
    secondaryCta: "Descubrir la clase ideal",
    chipsAria: "Beneficios principales",
    benefits: [
      "Principiantes bienvenidos",
      "Todos los niveles",
      "Ritmo adaptado",
      "Praia do Pontal",
    ],
    whatsappMessage:
      "¡Hola, Samurai! Conocí las clases a través del sitio y me gustaría saber cómo puedo empezar en Praia do Pontal.",
  },
  introVideo: {
    eyebrow: "Vive la experiencia",
    title: "Conoce el deporte de playa que transforma energía en movimiento.",
    body:
      "La altinha combina técnica, conexión, diversión y evolución en un escenario que forma parte de la experiencia.",
    cta: "Quiero hacer mi primera clase",
    controls: "Controles del video",
    pause: "Pausar video",
    play: "Reproducir video",
    unmute: "Activar sonido",
    mute: "Silenciar video",
    note: "Técnica, playa y movimiento en una experiencia práctica.",
    whatsappMessage:
      "¡Hola, Samurai! Vi el video de la experiencia en el sitio y quiero hacer mi primera clase en Praia do Pontal.",
  },
  rollers: {
    one: {
      items: [
        "Principiantes bienvenidos",
        "Praia do Pontal",
        "Todos los niveles",
        "PT • EN • ES",
        "Ritmo adaptado",
      ],
      label:
        "Principiantes bienvenidos, Praia do Pontal, Todos los niveles, PT, EN, ES, Ritmo adaptado",
    },
    two: {
      items: [
        "Técnica",
        "Confianza",
        "Comunidad",
        "Evolución",
        "Energía de playa",
        "Entrenamiento a tu ritmo",
      ],
      label:
        "Técnica, Confianza, Comunidad, Evolución, Energía de playa, Entrenamiento a tu ritmo",
    },
    three: {
      items: [
        "Tu primera clase puede empezar aquí",
        "Habla con Samurai",
        "Praia do Pontal",
        "Empieza a tu ritmo",
        "Principiantes bienvenidos",
      ],
      label:
        "Tu primera clase puede empezar aquí, Habla con Samurai, Praia do Pontal, Empieza a tu ritmo, Principiantes bienvenidos",
    },
  },
  quiz: {
    eyebrow: "Pre-atención",
    title: "Descubre la clase ideal para ti.",
    description:
      "Responde en menos de un minuto y lleva a WhatsApp un mensaje útil con tu nivel, objetivo, formato preferido y principal duda.",
    cover: {
      eyebrow: "Evaluación rápida",
      title: "Descubre la clase ideal para tu momento.",
      text:
        "Responde algunas preguntas rápidas para que Samurai entienda tu nivel, tu objetivo y la mejor manera de empezar.",
      factsAria: "Resumen de la evaluación rápida",
      facts: [
        "5 preguntas rápidas",
        "Toma menos de 1 minuto",
        "Orientación personalizada",
      ],
      startButton: "Empezar ahora",
      progress: "preguntas antes de la orientación",
    },
    startTitle: "Empieza por tu momento actual.",
    startText:
      "No hay respuesta correcta. Las respuestas solo sirven para facilitar la conversación con Samurai.",
    startButton: "Comenzar quiz",
    resultLabel: "Resultado",
    send: "Enviar respuestas a Samurai",
    back: "Volver",
    restart: "Rehacer",
    questionProgress: "Pregunta {current} de {total}",
    progressLabel: "Progreso {progress}%",
    hint: "Elige una respuesta para avanzar",
    advancing: "Avanzando...",
    autoAdvance: "Avance automático",
    notInformed: "No informado",
    questions: [
      {
        id: "level",
        question: "¿Cuál es tu nivel hoy?",
        options: [
          { id: "never", label: "Nunca jugué", emoji: "⚽" },
          { id: "starting", label: "Estoy empezando", emoji: "🌱" },
          { id: "practice", label: "Ya practico un poco", emoji: "🔥" },
          { id: "technical", label: "Quiero mejorar técnicamente", emoji: "🎯" },
        ],
      },
      {
        id: "goal",
        question: "¿Cuál es tu objetivo principal?",
        options: [
          { id: "learn", label: "Aprender desde cero", emoji: "🧩" },
          { id: "confidence", label: "Jugar con más confianza", emoji: "💪" },
          { id: "technique", label: "Mejorar mi técnica", emoji: "📈" },
          { id: "questions", label: "Resolver dudas antes de ir", emoji: "💬" },
        ],
      },
      {
        id: "format",
        question: "¿Cómo imaginas empezar?",
        options: [
          { id: "solo", label: "Solo", emoji: "👤" },
          { id: "pair", label: "Con otra persona", emoji: "👥" },
          { id: "group", label: "En grupo", emoji: "🏖️" },
          { id: "unsure", label: "Todavía no lo sé", emoji: "🤔" },
        ],
      },
      {
        id: "period",
        question: "¿Qué período suele funcionar mejor?",
        options: [
          { id: "morning", label: "Mañana", emoji: "🌅" },
          { id: "late_afternoon", label: "Final de la tarde", emoji: "🌇" },
          { id: "flexible", label: "Tengo flexibilidad", emoji: "🔄" },
        ],
      },
      {
        id: "concern",
        question: "¿Qué genera más duda o inseguridad?",
        options: [
          { id: "pace", label: "No poder acompañar el ritmo", emoji: "⚡" },
          { id: "shyness", label: "Vergüenza de empezar", emoji: "😅" },
          { id: "technique_gap", label: "Falta de técnica", emoji: "🧠" },
          { id: "how", label: "Quiero entender cómo funciona", emoji: "💬" },
        ],
      },
    ],
    labels: {
      level: "Mi nivel",
      goal: "Mi objetivo",
      format: "Prefiero empezar",
      period: "Mejor período",
      concern: "Mi principal duda",
    },
    results: {
      technique: {
        title: "Parece que estás listo para una clase con foco técnico.",
        text:
          "La idea es observar tu juego actual y ajustar fundamentos como toque, postura, control y lectura de la ronda.",
        recommendedProfile: "Evolucionar la técnica",
      },
      confidence: {
        title: "Ganar confianza puede hacer más ligera tu entrada en la ronda.",
        text:
          "El entrenamiento te ayuda a crear repertorio, entender el ritmo de la pelota y practicar con más seguridad.",
        recommendedProfile: "Ganar confianza",
      },
      zero: {
        title: "Puedes empezar con una clase adaptada a tu momento.",
        text:
          "Incluso sin experiencia, la clase organiza lo básico para que ganes confianza, entiendas la pelota y evoluciones en la arena.",
        recommendedProfile: "Empezar desde cero",
      },
    },
    whatsappIntro: "¡Hola, Samurai! Hice la pre-atención por el sitio.",
    whatsappOutro: "Me gustaría entender cómo funcionan las clases.",
  },
  specialist: {
    eyebrow: "El especialista",
    title: "Aprende con quien vive la playa todos los días.",
    body:
      'Wallace "Samurai" Costa une práctica real en la arena, lectura del nivel de cada alumno y orientación clara para transformar inseguridad en evolución real.',
    imageAlt: "Wallace Samurai Costa en la playa con un perro",
    captionName: 'Wallace "Samurai" Costa',
    captionText: "Altinha, playa y orientación práctica",
    locationBadge: "Posto 12 • Praia do Pontal",
    metricsAria: "Métricas confirmadas",
    metrics: [
      {
        value: 3,
        suffix: "",
        label: "Idiomas de atención",
        proof: "Confirmado en business.serviceFacts.languages",
      },
      {
        value: 1,
        suffix: "h",
        label: "Duración media",
        proof: "Confirmado en business.serviceFacts.duration",
      },
      {
        value: 7,
        suffix: "",
        label: "Días por semana",
        proof: "Confirmado en business.serviceFacts.frequency",
      },
    ],
    features: [
      {
        title: "Entrenamiento a tu ritmo",
        text: "La clase parte de tu momento actual y avanza con calma.",
      },
      {
        title: "Lectura práctica en la arena",
        text: "Correcciones simples te ayudan a entender la pelota y el cuerpo.",
      },
    ],
    cta: "Quiero hablar con Samurai",
    whatsappMessage:
      "¡Hola, Samurai! Vi tu presentación en el sitio y quiero entender qué clase combina con mi nivel.",
  },
  community: {
    eyebrow: "Comunidad",
    title: "Una comunidad que evoluciona junta.",
    body:
      "Personas de diferentes niveles compartiendo la misma energía, aprendiendo y disfrutando la playa.",
    imageAlt:
      "Grupo de Altinha com Samurai reunido en Praia do Pontal después de una actividad",
    testimonialsTitle: "Evaluaciones reales",
    noTestimonials:
      "Todavía no se agregaron evaluaciones autorizadas de Google. El carrusel permanece oculto hasta que existan datos reales.",
    cta: "Quiero vivir esta experiencia",
    whatsappMessage:
      "¡Hola, Samurai! Vi la experiencia de la comunidad en el sitio y quisiera entender cómo participar en las clases.",
  },
  testimonials: {
    carouselAria: "Evaluaciones autorizadas",
    googleReview: "Evaluación en Google",
    starsLabel: "{rating} de 5 estrellas",
    previous: "Evaluación anterior",
    next: "Siguiente evaluación",
    dots: "Indicadores de evaluaciones",
    dot: "Ir a la evaluación {index}",
  },
  practical: {
    eyebrow: "Cómo funciona",
    title: "Todo lo que necesitas saber antes de llegar a la arena.",
    body:
      "El contacto es directo, el entrenamiento respeta tu nivel y los detalles finales se confirman por WhatsApp antes de la primera clase.",
    stepsAria: "Pasos para empezar",
    steps: [
      {
        number: "01",
        title: "Escribe por WhatsApp",
        text: "El primer contacto es directo, sin formulario largo y sin burocracia.",
      },
      {
        number: "02",
        title: "Cuenta tu nivel y objetivo",
        text:
          "Di si estás empezando, si ya practicas o si quieres mejorar algún punto técnico.",
      },
      {
        number: "03",
        title: "Recibe orientación",
        text:
          "Samurai indica el mejor camino para tu primera experiencia en la arena.",
      },
      {
        number: "04",
        title: "Ve a la primera clase",
        text:
          "Los detalles del encuentro se confirman en la conversación según tu disponibilidad.",
      },
    ],
    firstClass: {
      eyebrow: "Tu primera clase",
      title: "Orientación en la arena, ritmo adaptado y materiales de la clase.",
      text:
        "La experiencia sucede en Praia do Pontal, en Recreio dos Bandeirantes, cerca de Posto 12. Puedes empezar solo y confirmar el punto de encuentro en el contacto.",
    },
    facts: [
      { label: "Duración media", value: "Aproximadamente una hora" },
      { label: "Lugar", value: "Praia do Pontal, cerca de Posto 12" },
      { label: "Niveles", value: "Del primer contacto a quien ya juega" },
      { label: "Períodos", value: "Temprano y al final de la tarde" },
      { label: "Idiomas", value: "PT, EN y ES" },
    ],
    checklistTitle: "Qué llevar",
    checklist: [
      "Ropa de playa",
      "Protector solar",
      "Disposición para entrenar en la arena",
      "Confirmación del punto de encuentro",
    ],
    primaryCta: "Reservar mi primera clase",
    secondaryCta: "Rehacer la pre-atención",
    whatsappMessage:
      "¡Hola, Samurai! Vi los detalles de las clases en el sitio y quisiera entender qué opción tiene sentido para mí.",
  },
  classProfiles: {
    heading: "Elige según tu momento",
    ariaLabel: "Carrusel de perfiles de clase",
    previous: "Perfil anterior",
    next: "Siguiente perfil",
    dots: "Indicadores de perfiles",
    dot: "Ir al perfil {index}",
    progress: "Perfil {current} de {total}",
    audienceLabel: "Para quién sirve",
    profiles: {
      zero: {
        title: "Empezar desde cero",
        description:
          "Para quien nunca practicó y quiere aprender los primeros movimientos con seguridad y tranquilidad.",
        audience: "Nunca jugaste o sientes vergüenza de entrar en la ronda.",
        cta: "Quiero empezar desde cero",
        whatsappMessage:
          "¡Hola, Samurai! Tengo interés en empezar desde cero y quisiera entender cómo funciona la primera clase en Praia do Pontal.",
      },
      confidence: {
        title: "Ganar confianza",
        description:
          "Para quien ya intentó o está empezando y quiere sentirse más tranquilo en la arena.",
        audience: "Ya tuviste contacto con la altinha, pero todavía juegas con inseguridad.",
        cta: "Quiero ganar confianza",
        whatsappMessage:
          "¡Hola, Samurai! Tengo interés en ganar confianza en la altinha y quisiera saber qué camino tiene sentido para mí.",
      },
      technique: {
        title: "Evolucionar la técnica",
        description:
          "Para quien ya practica un poco y quiere ajustar toque, postura y control.",
        audience: "Ya juegas o entrenas y quieres mejorar fundamentos específicos.",
        cta: "Quiero evolucionar la técnica",
        whatsappMessage:
          "¡Hola, Samurai! Tengo interés en evolucionar mi técnica y quisiera saber qué clase combina con mi momento.",
      },
    },
  },
  location: {
    eyebrow: "Ubicación",
    title: "Tu entrenamiento sucede frente al mar.",
    body:
      "Las clases suceden en Praia do Pontal, en Recreio, en la región de Posto 12. El punto exacto se confirma en el contacto para facilitar tu llegada.",
    meetingLabel: "Punto de encuentro",
    meetingPoint: "Praia do Pontal, región de Posto 12",
    neighborhoodAndCity: "Recreio dos Bandeirantes, Rio de Janeiro",
    exactNote: "Punto exacto confirmado por WhatsApp antes de la clase.",
    route: "Abrir ruta",
    cta: "Confirmar punto por WhatsApp",
    mapTitle: "Mapa aproximado de Praia do Pontal, región de Posto 12",
    mapPendingTitle: "Mapa pendiente de confirmación.",
    mapPendingText:
      "La referencia confirmada es Praia do Pontal, Recreio dos Bandeirantes, región de Posto 12.",
    whatsappMessage:
      "¡Hola, Samurai! Quiero confirmar el punto de encuentro de la clase en Praia do Pontal, región de Posto 12.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Respuestas directas antes de escribir.",
    text:
      "Las respuestas abajo usan solo información confirmada. Precio, disponibilidad y formato se alinean en el contacto.",
    cta: "Hacer una pregunta por WhatsApp",
    whatsappMessage:
      "¡Hola, Samurai! Leí el FAQ y quisiera hacer una pregunta sobre las clases de altinha.",
    items: [
      {
        id: "preciso-saber-jogar",
        question: "¿Necesito saber jugar?",
        answer:
          "No. La clase atiende desde quien nunca jugó hasta quien ya practica y quiere evolucionar técnicamente.",
      },
      {
        id: "posso-ir-sozinho",
        question: "¿Puedo ir solo?",
        answer:
          "Sí. El contacto por WhatsApp ayuda a entender tu momento y orientar la mejor forma de empezar.",
      },
      {
        id: "preciso-levar-bola",
        question: "¿Necesito llevar pelota?",
        answer:
          "La clase incluye orientación y materiales usados en la experiencia. Si hay alguna necesidad específica, se confirma en el contacto.",
      },
      {
        id: "o-que-vestir",
        question: "¿Qué debo vestir?",
        answer:
          "Usa ropa de playa cómoda y protección solar, como protector solar.",
      },
      {
        id: "quanto-tempo-dura",
        question: "¿Cuánto dura la clase?",
        answer: "La duración media es de aproximadamente una hora.",
      },
      {
        id: "onde-acontece",
        question: "¿Dónde sucede?",
        answer:
          "Las clases suceden en Praia do Pontal, en Recreio dos Bandeirantes, región de Posto 12. El punto exacto se confirma por WhatsApp.",
      },
      {
        id: "periodos",
        question: "¿Qué períodos están disponibles?",
        answer:
          "Los horarios son principalmente temprano y al final de la tarde. La disponibilidad real se confirma en el contacto.",
      },
      {
        id: "valor",
        question: "¿Cómo descubro el valor?",
        answer:
          "Las opciones y condiciones se informan por WhatsApp según el formato más adecuado.",
      },
      {
        id: "idiomas",
        question: "¿Hay atención en otros idiomas?",
        answer: "Sí. La atención puede ser en portugués, inglés y español.",
      },
      {
        id: "agendar",
        question: "¿Cómo hago para reservar?",
        answer:
          "Escribe por WhatsApp, cuenta tu nivel y objetivo, y recibe la orientación para combinar la primera clase.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Empieza en la arena",
    title: "Tu primera evolución puede empezar en la arena.",
    text:
      "No importa si nunca jugaste o si ya practicas. El primer paso es hablar con Samurai y entender la mejor forma de empezar.",
    primary: "Hablar con Samurai por WhatsApp",
    secondary: "Descubrir la clase ideal",
    visualTop: "Praia do Pontal",
    visualStrong: "Empieza a tu ritmo",
    whatsappMessage:
      "¡Hola, Samurai! Quiero reservar por WhatsApp y entender cómo empezar en Praia do Pontal.",
  },
  footer: {
    description:
      "Clases de altinha en Praia do Pontal, en Recreio dos Bandeirantes, con entrenamiento adaptado y contacto directo por WhatsApp.",
    whatsappMessage:
      "¡Hola, Samurai! Vine por el pie de página del sitio y quiero saber cómo funcionan las clases.",
    navigationTitle: "Navegación",
    infoTitle: "Información",
    serviceLanguages: "Atención en PT, EN y ES",
    rights: "Todos los derechos reservados.",
    privacy: "Política de privacidad",
    cookiePreferences: "Preferencias de cookies",
  },
  floating: {
    ariaLabel: "Llamar a Altinha com Samurai por WhatsApp",
    message:
      "¡Hola, Samurai! Vine por el botón flotante del sitio y quiero entender cómo funcionan las clases de altinha.",
  },
  consent: {
    eyebrow: "Privacidad",
    title: "Controla tus cookies.",
    text:
      "Usamos cookies esenciales para que el sitio funcione. Analytics y marketing solo entran si lo permites. Puedes cambiarlo en el pie de página.",
    privacyLink: "Ver política de privacidad",
    optionsAria: "Preferencias de cookies",
    essentialTitle: "Esenciales",
    essentialText: "Necesarias para navegación y seguridad.",
    analyticsTitle: "Analytics",
    analyticsText: "Ayuda a entender secciones, CTAs y origen de campaña.",
    marketingTitle: "Marketing",
    marketingText: "Permite píxeles de medios cuando haya ID real.",
    reject: "Rechazar",
    customize: "Personalizar",
    save: "Guardar preferencias",
    accept: "Aceptar",
  },
  privacy: {
    metadataTitle: "Política de privacidad",
    back: "Volver a la landing page",
    eyebrow: "Privacidad",
    title: "Política de privacidad inicial",
    intro:
      "Esta página describe la estructura de privacidad del sitio Altinha com Samurai. No reemplaza la validación jurídica final porque nombre legal, CNPJ, email de privacidad y plazos formales todavía necesitan confirmación.",
    sections: [
      {
        title: "Datos que informas",
        text:
          "Cuando escribes por WhatsApp o usas el quiz del sitio, puedes informar nivel, objetivo, preferencia de horario, dudas y datos de contacto dentro de la propia conversación.",
      },
      {
        title: "Datos técnicos",
        text:
          "Con tu consentimiento, el sitio puede registrar eventos de navegación y origen de campaña para entender qué secciones ayudan al contacto.",
      },
      {
        title: "Cookies y consentimiento",
        text:
          "Las cookies esenciales mantienen el funcionamiento básico. Analytics y marketing solo se activan después de tu elección.",
      },
      {
        title: "Compartir datos",
        text:
          "Integraciones como Google Analytics, Google Tag Manager o Meta Pixel solo se cargan si hay IDs reales configurados y consentimiento compatible.",
      },
      {
        title: "Puntos pendientes",
        text:
          "Nombre legal, CNPJ, email de privacidad y plazos formales de retención todavía necesitan confirmación por el responsable de la marca.",
      },
    ],
  },
  whatsapp: {
    defaultMessage:
      "¡Hola, Samurai! Conocí las clases a través del sitio y me gustaría saber cómo puedo empezar.",
    quizAnswersTitle: "Respuestas de la pre-atención:",
    campaignTitle: "Origen de la campaña:",
    origin: "Origen del clic",
    section: "Sección",
    cta: "CTA",
  },
};
