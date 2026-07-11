import { CheckCircle2, Clock3, Waves } from "lucide-react";
import {
  classChecklist,
  classDetailBlocks,
  classDetailChips,
} from "@/data/classDetails";
import { business } from "@/data/business";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppButton } from "./WhatsAppButton";

export function ClassDetails() {
  return (
    <section className="class-details" id="detalhes" aria-labelledby="details-title">
      <div className="section-shell class-details__layout">
        <div className="class-details__main">
          <SectionHeading
            eyebrow="Detalhes práticos"
            title="Sua primeira aula, sem dúvida escondida."
            text="O essencial fica claro antes do contato. Valores, formato ideal e detalhes finais são confirmados diretamente pelo WhatsApp."
          />

          <div className="first-class">
            <div>
              <Waves aria-hidden="true" />
              <span>Sua primeira aula</span>
            </div>
            <h3>Orientação na areia, ritmo adaptado e materiais da aula.</h3>
            <p>
              A experiência acontece na {business.locale.beach}, no{" "}
              {business.locale.neighborhood}, com duração média de{" "}
              {business.serviceFacts.duration.toLowerCase()}.
            </p>
          </div>
        </div>

        <div className="class-details__aside">
          <div className="class-detail-grid">
            {classDetailBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <article key={block.title} className="class-detail-card">
                  <Icon aria-hidden="true" />
                  <h3>{block.title}</h3>
                  <p>{block.text}</p>
                </article>
              );
            })}
          </div>

          <div className="class-details__checklist">
            <div className="class-details__checklist-title">
              <Clock3 aria-hidden="true" />
              <h3>O que levar</h3>
            </div>
            <ul>
              {classChecklist.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <Icon aria-hidden="true" />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="class-details__chips" aria-label="Níveis e idiomas">
            {classDetailChips.map((chip) => (
              <span key={chip}>
                <CheckCircle2 aria-hidden="true" />
                {chip}
              </span>
            ))}
          </div>

          <WhatsAppButton
            origin="class_details"
            section="detalhes"
            ctaId="class-details-whatsapp"
            message="Olá, Samurai! Vi os detalhes práticos da aula e queria saber quais opções fazem sentido para mim."
          >
            Confirmar detalhes da aula
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
