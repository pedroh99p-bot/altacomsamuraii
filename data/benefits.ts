import {
  Clock3,
  Compass,
  HeartHandshake,
  Languages,
  MapPin,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Waves,
} from "lucide-react";

export const heroBenefits = [
  "Iniciantes bem-vindos",
  "Todos os níveis",
  "Ritmo adaptado",
  "Praia do Pontal",
] as const;

export const quickInformation = [
  {
    title: "Onde acontece?",
    text: "Praia do Pontal, no Recreio, próximo ao Posto 12.",
    icon: MapPin,
    tone: "location",
    featured: true,
  },
  {
    title: "Para quem é?",
    text: "De quem nunca tocou em uma bola até quem já joga e quer evoluir.",
    icon: UsersRound,
    tone: "people",
  },
  {
    title: "Como funciona?",
    text: "Aula prática na areia, com orientação próxima e treino adaptado.",
    icon: Waves,
    tone: "method",
  },
  {
    title: "O que levar?",
    text: "Roupa de praia, disposição e proteção para o sol. Os materiais da aula entram na experiência.",
    icon: Clock3,
    tone: "material",
  },
] as const;

export const communityCards = [
  {
    title: "Pessoas de níveis diferentes",
    text: "O treino respeita o ponto de partida de cada aluno.",
  },
  {
    title: "Areia, troca e evolução",
    text: "A experiência combina técnica, prática e convivência na praia.",
  },
  {
    title: "Atendimento em PT, EN e ES",
    text: "A estrutura já considera alunos locais e turistas.",
  },
] as const;

export const objections = [
  {
    title: "Nunca joguei",
    text: "O primeiro contato começa pelos fundamentos, sem pressa e sem cobrança de performance.",
    icon: Sparkles,
    size: "large",
  },
  {
    title: "Tenho vergonha",
    text: "O ambiente é leve, acolhedor e pensado para você ganhar confiança aos poucos.",
    icon: HeartHandshake,
    size: "medium",
  },
  {
    title: "Não conheço ninguém",
    text: "Você chega para aprender e encontra uma experiência de comunidade na areia.",
    icon: UsersRound,
    size: "small",
  },
  {
    title: "Não sei se acompanho",
    text: "O ritmo do treino é ajustado ao seu nível, do básico ao avançado.",
    icon: ShieldCheck,
    size: "medium",
  },
  {
    title: "Quero melhorar técnica",
    text: "Postura, toque, leitura de bola e dinâmica de roda entram no treino.",
    icon: Compass,
    size: "small",
  },
] as const;

export const specialistBullets = [
  { label: "Acompanhamento próximo", icon: HeartHandshake },
  { label: "Treino adaptado ao nível do aluno", icon: ShieldCheck },
  { label: "Atendimento em PT, EN e ES", icon: Languages },
  { label: "Orientação para diferentes níveis", icon: Compass },
  { label: "Experiência prática na areia", icon: Waves },
] as const;
