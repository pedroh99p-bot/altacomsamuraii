import {
  Clock3,
  Languages,
  MapPin,
  ShieldCheck,
  Shirt,
  Sun,
  Waves,
} from "lucide-react";
import { business } from "./business";

export const classDetailBlocks = [
  {
    title: "Onde",
    text: `${business.locale.beach}, ${business.locale.neighborhood}, ${business.locale.reference}.`,
    icon: MapPin,
  },
  {
    title: "Quando",
    text: business.serviceFacts.schedule,
    icon: Clock3,
  },
  {
    title: "Para quem",
    text: "Iniciantes, intermediários e alunos que já jogam e querem evoluir.",
    icon: Waves,
  },
  {
    title: "Idiomas",
    text: "Atendimento em português, inglês e espanhol.",
    icon: Languages,
  },
] as const;

export const classChecklist = [
  { label: "Roupa de praia", icon: Shirt },
  { label: "Protetor solar", icon: Sun },
  { label: "Disposição para treinar na areia", icon: ShieldCheck },
] as const;

export const classDetailChips = [
  "Primeiro contato",
  "Iniciantes",
  "Intermediários",
  "Avançados",
  "PT",
  "EN",
  "ES",
] as const;
