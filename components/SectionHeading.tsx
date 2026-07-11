import { cx } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cx("section-heading", align === "center" && "is-centered")}>
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
