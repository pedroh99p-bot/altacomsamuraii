import { cx } from "@/lib/utils";

type EditorialRollerProps = {
  items: readonly string[];
  variant?: "cyan" | "navy" | "sand";
  reverse?: boolean;
  label: string;
  id?: string;
};

export function EditorialRoller({
  items,
  variant = "cyan",
  reverse = false,
  label,
  id,
}: EditorialRollerProps) {
  const row = (
    <>
      {items.map((item) => (
        <span key={item}>
          {item}
          <i aria-hidden="true" />
        </span>
      ))}
    </>
  );

  return (
    <section
      id={id}
      className={cx(
        "editorial-roller",
        `editorial-roller--${variant}`,
        reverse && "editorial-roller--reverse",
      )}
      aria-label={label}
    >
      <div className="editorial-roller__track" aria-hidden="true">
        <div className="editorial-roller__group">{row}</div>
        <div className="editorial-roller__group">{row}</div>
      </div>
    </section>
  );
}
