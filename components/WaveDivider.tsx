import { cx } from "@/lib/utils";

type WaveDividerProps = {
  variant:
    | "videoToLight"
    | "lightToBlue"
    | "blueToWhite"
    | "whiteToBlue"
    | "navyToCyan";
};

export function WaveDivider({ variant }: WaveDividerProps) {
  return (
    <div className={cx("wave-divider", `wave-divider--${variant}`)} aria-hidden="true">
      <svg viewBox="0 0 1440 92" preserveAspectRatio="none" focusable="false">
        <path
          className="wave-divider__base"
          d="M0 42L80 48.2C160 54.7 320 67.3 480 60.8C640 54.7 800 29.3 960 23.2C1120 16.7 1280 29.3 1360 35.8L1440 42V92H0V42Z"
        />
        <path
          className="wave-divider__sheen"
          d="M0 58L90 52.5C180 47 360 36 540 42.5C720 49 900 73 1080 72.8C1260 73 1350 48 1440 38V92H0V58Z"
        />
      </svg>
    </div>
  );
}
