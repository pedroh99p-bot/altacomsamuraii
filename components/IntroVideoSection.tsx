"use client";

import { Pause, Play, Sparkles, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { business } from "@/data/business";
import { useTranslations } from "@/i18n/useTranslations";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppButton } from "./WhatsAppButton";

export function IntroVideoSection() {
  const { locale, t } = useTranslations();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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
      void video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
      trackIntroControl("play");
      return;
    }

    video.pause();
    setIsPlaying(false);
    trackIntroControl("pause");
  };

  const startVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = false;
    video.muted = false;
    if (video.volume === 0) video.volume = 1;
    setHasStarted(true);
    setIsMuted(false);
    void video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
    trackIntroControl("play");
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
              muted={isMuted}
              playsInline
              preload="metadata"
              poster={business.assets.introVideoPoster}
              onClick={hasStarted ? togglePlayback : startVideo}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onVolumeChange={syncAudioState}
            >
              <source src={business.assets.introVideo} type="video/webm" />
            </video>
            {!hasStarted ? (
              <button
                type="button"
                className="intro-video__cover-play"
                onClick={startVideo}
                aria-label={t.introVideo.play}
                title={t.introVideo.play}
              >
                <Play aria-hidden="true" />
              </button>
            ) : (
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
            )}
          </div>
          <div className="intro-video__note" aria-hidden="true">
            {t.introVideo.note}
          </div>
        </div>
      </div>
    </section>
  );
}
