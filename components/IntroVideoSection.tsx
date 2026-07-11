"use client";

import { Pause, Play, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { business } from "@/data/business";
import { useTranslations } from "@/i18n/useTranslations";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppButton } from "./WhatsAppButton";

export function IntroVideoSection() {
  const { t } = useTranslations();
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }

        if (!userPausedRef.current) {
          void video.play().catch(() => setIsPlaying(false));
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      userPausedRef.current = false;
      void video.play().then(() => setIsPlaying(true));
      trackEvent("view_content", {
        section: "intro_video",
        cta_id: "intro-video-play",
        video_state: "play",
      });
      return;
    }

    userPausedRef.current = true;
    video.pause();
    setIsPlaying(false);
    trackEvent("view_content", {
      section: "intro_video",
      cta_id: "intro-video-pause",
      video_state: "pause",
    });
  };

  return (
    <section
      className="intro-video"
      id="experiencia"
      aria-labelledby="intro-video-title"
    >
      <div className="section-shell intro-video__layout">
        <div className="intro-video__copy">
          <span className="intro-video__eyebrow">
            <Sparkles aria-hidden="true" />
            {t.introVideo.eyebrow}
          </span>
          <h2 id="intro-video-title">{t.introVideo.title}</h2>
          <p>{t.introVideo.body}</p>
          <WhatsAppButton
            origin="intro_video"
            section="intro_video"
            ctaId="intro-video-whatsapp"
            message={t.introVideo.whatsappMessage}
          >
            {t.introVideo.cta}
          </WhatsAppButton>
        </div>

        <div className="intro-video__stage">
          <div className="intro-video__frame">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={business.assets.communityImage}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={business.assets.introVideo} type="video/mp4" />
            </video>
            <button
              type="button"
              className="intro-video__control"
              onClick={togglePlayback}
              aria-label={isPlaying ? t.introVideo.pause : t.introVideo.play}
            >
              {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
            </button>
          </div>
          <div className="intro-video__note" aria-hidden="true">
            {t.introVideo.note}
          </div>
        </div>
      </div>
    </section>
  );
}
