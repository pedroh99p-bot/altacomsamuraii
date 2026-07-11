import { serviceLanguages } from "@/data/navigation";

const topbarItems = [
  serviceLanguages.join(" • "),
  "Praia do Pontal",
  "Posto 12",
  "Aulas todos os dias",
  "Iniciantes bem-vindos",
  "Treino no seu ritmo",
];

export function TopbarRoller() {
  const content = topbarItems.join("  •  ");

  return (
    <div className="topbar" aria-label="Informações rápidas">
      <div className="topbar__track">
        <span>{content}</span>
        <span aria-hidden="true">{content}</span>
        <span aria-hidden="true">{content}</span>
      </div>
    </div>
  );
}
