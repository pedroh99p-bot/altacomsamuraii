import { ClipboardList, MapPinned, MessageCircle, Sparkles } from "lucide-react";

export const howItWorksSteps = [
  {
    number: "01",
    title: "Chame pelo WhatsApp",
    text: "O primeiro contato é direto, sem formulário longo e sem burocracia.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Conte seu nível e objetivo",
    text: "Diga se está começando, se já pratica ou se quer evoluir algum ponto técnico.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Receba a orientação",
    text: "Samurai indica o melhor caminho para sua primeira experiência na areia.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Vá para a primeira aula",
    text: "Os detalhes do encontro são confirmados no contato, de acordo com sua disponibilidade.",
    icon: MapPinned,
  },
] as const;
