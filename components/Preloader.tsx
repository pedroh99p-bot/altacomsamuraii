"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { business } from "@/data/business";

export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let storage: Storage | null = null;

    try {
      storage = window.sessionStorage;
    } catch {
      storage = null;
    }

    const alreadySeen = storage?.getItem("samurai-preloader-seen");
    if (alreadySeen) return;

    setVisible(true);
    storage?.setItem("samurai-preloader-seen", "true");

    const exitTimer = window.setTimeout(() => setLeaving(true), 900);
    const removeTimer = window.setTimeout(() => setVisible(false), 1350);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader${leaving ? " preloader--leaving" : ""}`}>
      <div className="preloader__glow" aria-hidden="true" />
      <div className="preloader__logo">
        <Image
          src={business.assets.logo}
          alt="Altinha com Samurai"
          width={112}
          height={112}
          priority
        />
      </div>
      <div className="preloader__bar" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
