"use client";

import { Pause, Play, Sparkles, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { business } from "@/data/business";
import { useTranslations } from "@/i18n/useTranslations";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppButton } from "./WhatsAppButton";

export function IntroVideoSection() {
  const { locale, t } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoadVideo(true);
        observer.disconnect();
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    setIsMuted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoadVideo || !("IntersectionObserver" in window)) {
      return;
    }

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
  }, [shouldLoadVideo]);

  const trackIntroControl = (action: "play" | "pause" | "unmute" | "mute") => {
    trackEvent("intro_video_control", {
      action,
      section: "intro_video",
      locale,
    });
  };

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      userPausedRef.current = false;
      void video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
      trackIntroControl("play");
      return;
    }

    userPausedRef.current = true;
    video.pause();
    setIsPlaying(false);
    trackIntroControl("pause");
  };

  const toggleAudio = () => {
    const video = videoRef.current;
    if (!video) return;

    const wasPaused = video.paused;
    const shouldMute = !video.muted && video.volume > 0;

    if (shouldMute) {
      video.defaultMuted = true;
      video.muted = true;
      setIsMuted(true);
      trackIntroControl("mute");
      return;
    }

    if (video.volume === 0) {
      video.volume = 1;
    }

    video.defaultMuted = false;
    video.muted = false;
    setIsMuted(false);
    if (!wasPaused) {
      void video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
    trackIntroControl("unmute");
  };

  const syncAudioState = () => {
    const video = videoRef.current;
    if (!video) return;
    setIsMuted(video.muted || video.volume === 0);
  };

  const playbackLabel = isPlaying ? t.introVideo.pause : t.introVideo.play;
  const audioLabel = isMuted ? t.introVideo.unmute : t.introVideo.mute;

  return (
    <section
      ref={sectionRef}
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
              autoPlay={shouldLoadVideo}
              muted={isMuted}
              loop
              playsInline
              preload={shouldLoadVideo ? "metadata" : "none"}
              poster={shouldLoadVideo ? business.assets.heroPoster : undefined}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onVolumeChange={syncAudioState}
            >
              {shouldLoadVideo ? (
                <source src={business.assets.introVideo} type="video/webm" />
              ) : null}
            </video>
            <div
              className="intro-video__control-dock"
              role="group"
              aria-label={t.introVideo.controls}
            >
              <button
                type="button"
                className="intro-video__control"
                onClick={togglePlayback}
                aria-label={playbackLabel}
                title={playbackLabel}
                aria-pressed={isPlaying}
              >
                {isPlaying ? (
                  <Pause aria-hidden="true" />
                ) : (
                  <Play aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                className="intro-video__control"
                onClick={toggleAudio}
                aria-label={audioLabel}
                title={audioLabel}
                aria-pressed={!isMuted}
              >
                {isMuted ? (
                  <VolumeX aria-hidden="true" />
                ) : (
                  <Volume2 aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          <div className="intro-video__note" aria-hidden="true">
            {t.introVideo.note}
          </div>
        </div>
      </div>
    </section>
  );
}
