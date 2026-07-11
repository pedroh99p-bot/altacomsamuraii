"use client";

import { useTranslations } from "@/i18n/useTranslations";

export function TopbarRoller() {
  const { t } = useTranslations();
  const content = t.topbar.items.join("  •  ");

  return (
    <div className="topbar" aria-label={t.topbar.ariaLabel}>
      <div className="topbar__track">
        <span>{content}</span>
        <span aria-hidden="true">{content}</span>
        <span aria-hidden="true">{content}</span>
      </div>
    </div>
  );
}
