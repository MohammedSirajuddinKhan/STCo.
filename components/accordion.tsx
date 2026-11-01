"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/lib/content";

export function Accordion({ items }: { items: FaqItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-b border-[var(--hairline)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div className="accordion-item" key={item.question}>
            <h3>
              <button
                type="button"
                id={triggerId}
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="display-4 max-w-[46rem] pr-4">{item.question}</span>
                <span className="accordion-icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="accordion-panel"
              data-open={isOpen ? "true" : "false"}
            >
              <div>
                <p className="body-copy max-w-[62ch] pb-7 pr-10">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
