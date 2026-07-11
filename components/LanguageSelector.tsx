const languages = [
  { code: "br", label: "Atendimento em português", active: true },
  { code: "us", label: "Atendimento em inglês", active: false },
  { code: "es", label: "Atendimento em espanhol", active: false },
] as const;

export function LanguageSelector() {
  return (
    <div
      className="language-selector"
      aria-label="Atendimento em português, inglês e espanhol"
    >
      {languages.map((language) => (
        <span
          key={language.code}
          className={language.active ? "is-active" : undefined}
          role="img"
          aria-label={language.label}
          title={language.label}
        >
          <span
            className={`language-selector__flag language-selector__flag--${language.code}`}
            aria-hidden="true"
          />
        </span>
      ))}
    </div>
  );
}
