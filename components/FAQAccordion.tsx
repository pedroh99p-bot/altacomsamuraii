"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: readonly FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="faq-accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;

        return (
          <article className="faq-item" key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                  setOpenId(isOpen ? null : item.id);
                  if (!isOpen) {
                    trackEvent("faq_open", {
                      section: "faq",
                      cta_id: item.id,
                    });
                  }
                }}
              >
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-label={item.question}
              aria-hidden={!isOpen}
              className={isOpen ? "is-open" : undefined}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
