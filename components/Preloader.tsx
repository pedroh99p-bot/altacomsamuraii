"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { useTranslations } from "@/i18n/useTranslations";

const storageKey = "samurai-preloader-seen";
const heroReadyEvent = "samurai:hero-ready";
const minimumVisibleMs = 820;
const maximumVisibleMs = 1550;
const curtainDurationMs = 560;

type PreloaderState = "visible" | "leaving" | "hidden";

export function Preloader() {
  const { t } = useTranslations();
  const [state, setState] = useState<PreloaderState>("visible");

  useEffect(() => {
    let storage: Storage | null = null;
    let restoredScroll = false;
    let finished = false;
    let minimumElapsed = false;
    let heroReady = false;
    const previousOverflow = document.body.style.overflow;

    try {
      storage = window.sessionStorage;
    } catch {
      storage = null;
    }

    const alreadySeen = storage?.getItem(storageKey);
    if (alreadySeen === "true") {
      setState("hidden");
      return;
    }

    const restoreScroll = () => {
      if (restoredScroll) return;
      document.body.style.overflow = previousOverflow;
      restoredScroll = true;
    };

    const complete = () => {
      if (finished || !minimumElapsed || !heroReady) return;
      finished = true;
      setState("leaving");

      window.setTimeout(() => {
        setState("hidden");
        restoreScroll();
        try {
          storage?.setItem(storageKey, "true");
        } catch {
          return;
        }
      }, curtainDurationMs);
    };

    const markHeroReady = () => {
      heroReady = true;
      complete();
    };

    document.body.style.overflow = "hidden";

    const video = document.querySelector<HTMLVideoElement>(".hero__background-video");
    if (video && video.readyState >= 2) {
      window.requestAnimationFrame(markHeroReady);
    }

    const minTimer = window.setTimeout(() => {
      minimumElapsed = true;
      complete();
    }, minimumVisibleMs);
    const maxTimer = window.setTimeout(markHeroReady, maximumVisibleMs);

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) markHeroReady();
    };

    window.addEventListener(heroReadyEvent, markHeroReady, { once: true });
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.clearTimeout(minTimer);
      window.clearTimeout(maxTimer);
      window.removeEventListener(heroReadyEvent, markHeroReady);
      window.removeEventListener("pageshow", onPageShow);
      restoreScroll();
    };
  }, []);

  if (state === "hidden") return null;

  return (
    <div
      className={`preloader${state === "leaving" ? " preloader--leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={t.preloader.text}
    >
      <div className="preloader__glow" aria-hidden="true" />
      <div className="preloader__visual" aria-hidden="true">
        <div className="preloader__ring" />
        <Image
          className="preloader__logo"
          src={business.assets.logo}
          alt=""
          width={112}
          height={112}
          priority
        />
      </div>
      <p className="preloader__text">{t.preloader.text}</p>
    </div>
  );
}
