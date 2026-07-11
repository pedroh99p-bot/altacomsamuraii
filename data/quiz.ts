export type QuizQuestionId =
  | "level"
  | "goal"
  | "format"
  | "period"
  | "concern";

export type QuizOption = {
  id: string;
  label: string;
  emoji: string;
};

export type QuizQuestion = {
  id: QuizQuestionId;
  question: string;
  options: QuizOption[];
};

export type QuizAnswers = Partial<Record<QuizQuestionId, string>>;
export type QuizAnswerLabels = Partial<Record<QuizQuestionId, string>>;

export const quizQuestions: QuizQuestion[] = [
  {
    id: "level",
    question: "Qual é o seu nível hoje?",
    options: [
      { id: "never", label: "Nunca joguei", emoji: "⚽" },
      { id: "starting", label: "Estou começando", emoji: "🌱" },
      { id: "practice", label: "Já pratico um pouco", emoji: "🔥" },
      { id: "technical", label: "Quero evoluir tecnicamente", emoji: "🎯" },
    ],
  },
  {
    id: "goal",
    question: "Qual é seu principal objetivo?",
    options: [
      { id: "learn", label: "Aprender do zero", emoji: "🧩" },
      { id: "confidence", label: "Jogar com mais confiança", emoji: "💪" },
      { id: "technique", label: "Melhorar minha técnica", emoji: "📈" },
      { id: "close", label: "Ter acompanhamento mais próximo", emoji: "🏆" },
    ],
  },
  {
    id: "format",
    question: "Como você imagina começar?",
    options: [
      { id: "solo", label: "Sozinho", emoji: "👤" },
      { id: "pair", label: "Com outra pessoa", emoji: "👥" },
      { id: "group", label: "Em grupo", emoji: "🏖️" },
      { id: "unsure", label: "Ainda não sei", emoji: "🤔" },
    ],
  },
  {
    id: "period",
    question: "Qual período costuma funcionar melhor?",
    options: [
      { id: "morning", label: "Manhã", emoji: "🌅" },
      { id: "late_afternoon", label: "Final da tarde", emoji: "🌇" },
      { id: "flexible", label: "Tenho flexibilidade", emoji: "🔄" },
    ],
  },
  {
    id: "concern",
    question: "O que mais gera dúvida ou insegurança?",
    options: [
      { id: "pace", label: "Não conseguir acompanhar", emoji: "⚡" },
      { id: "shyness", label: "Vergonha de começar", emoji: "😅" },
      { id: "technique_gap", label: "Falta de técnica", emoji: "🧠" },
      { id: "how", label: "Quero entender como funciona", emoji: "💬" },
    ],
  },
];

const questionLabelMap = {
  level: "Meu nível",
  goal: "Meu objetivo",
  format: "Prefiro começar",
  period: "Melhor período",
  concern: "Minha principal dúvida",
} as const;

export function getQuizAnswerLabels(answers: QuizAnswers): QuizAnswerLabels {
  return quizQuestions.reduce<QuizAnswerLabels>((labels, question) => {
    const selected = answers[question.id];
    const option = question.options.find((item) => item.id === selected);
    if (option) labels[question.id] = option.label;
    return labels;
  }, {});
}

export function getQuizResult(labels: QuizAnswerLabels) {
  if (labels.goal === "Melhorar minha técnica") {
    return {
      title: "Você parece pronto para uma aula com foco técnico.",
      text: "A ideia é observar seu jogo atual e ajustar fundamentos como toque, postura, controle e leitura da roda.",
      recommendedProfile: "Evoluir a técnica",
    };
  }

  if (
    labels.goal === "Ter acompanhamento mais próximo" ||
    labels.format === "Sozinho"
  ) {
    return {
      title: "Uma orientação mais próxima pode deixar o começo mais claro.",
      text: "O contato direto ajuda a entender seu objetivo, reduzir inseguranças e combinar um ritmo confortável para a primeira experiência.",
      recommendedProfile: "Acompanhamento mais próximo",
    };
  }

  return {
    title: "Você pode começar com uma aula adaptada ao seu momento.",
    text: "Mesmo sem experiência, a aula organiza o básico para você ganhar confiança, entender a bola e evoluir na areia.",
    recommendedProfile: "Começar do zero",
  };
}

export function buildQuizWhatsAppMessage(labels: QuizAnswerLabels) {
  const lines = quizQuestions.map((question) => {
    const label = questionLabelMap[question.id];
    return `${label}: ${labels[question.id] ?? "Não informado"}`;
  });

  return [
    "Olá, Samurai! Fiz o pré-atendimento pelo site.",
    "",
    ...lines,
    "",
    "Gostaria de entender como funcionam as aulas.",
  ].join("\n");
}
