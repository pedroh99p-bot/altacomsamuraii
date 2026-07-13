"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  MessageCircle,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { business } from "@/data/business";
import {
  buildQuizWhatsAppMessage,
  getQuizAnswerLabels,
  getQuizResult,
  type LocalizedQuizQuestion,
  type QuizAnswers,
  type QuizQuestionId,
} from "@/data/quiz";
import { useTranslations } from "@/i18n/useTranslations";
import { trackEvent } from "@/lib/analytics";
import { cx } from "@/lib/utils";
import { WhatsAppButton } from "./WhatsAppButton";

const coverIcons = [Sparkles, Clock3, MessageCircle] as const;

export function Quiz() {
  const { t } = useTranslations();
  const quizQuestions = t.quiz.questions as readonly LocalizedQuizQuestion[];
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [completed, setCompleted] = useState(false);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const coverTitleRef = useRef<HTMLHeadingElement>(null);
  const advanceTimerRef = useRef<number | null>(null);

  const currentQuestion = quizQuestions[step];
  const labels = useMemo(
    () => getQuizAnswerLabels(answers, quizQuestions),
    [answers, quizQuestions],
  );
  const result = useMemo(() => getQuizResult(answers, t), [answers, t]);
  const selected = currentQuestion
    ? answers[currentQuestion.id as QuizQuestionId]
    : undefined;
  const progress = !started
    ? 0
    : completed
    ? 100
    : Math.round(((step + 1) / quizQuestions.length) * 100);

  const clearAdvanceTimer = () => {
    if (advanceTimerRef.current) {
      window.clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
  };

  useEffect(() => {
    if (started) {
      titleRef.current?.focus();
      trackEvent("quiz_step", {
        section: "quiz",
          quiz_step: completed ? "resultado" : step + 1,
      });
    }
  }, [started, step, completed]);

  useEffect(() => () => clearAdvanceTimer(), []);

  const start = () => {
    clearAdvanceTimer();
    setStep(0);
    setCompleted(false);
    setIsAdvancing(false);
    setStarted(true);
    trackEvent("quiz_start", { section: "quiz", quiz_step: 1 });
  };

  const selectAnswer = (answerId: string, answerLabel: string) => {
    if (!currentQuestion || isAdvancing) return;

    clearAdvanceTimer();
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: answerId,
    };
    const nextResult = getQuizResult(nextAnswers, t);

    setAnswers(nextAnswers);
    setIsAdvancing(true);
    trackEvent("quiz_answer", {
      section: "quiz",
      quiz_step: step + 1,
      quiz_answer: answerLabel,
    });

    advanceTimerRef.current = window.setTimeout(() => {
      advanceTimerRef.current = null;
      setIsAdvancing(false);

      if (step === quizQuestions.length - 1) {
        setCompleted(true);
        trackEvent("quiz_complete", {
          section: "quiz",
          recommended_profile: nextResult.recommendedProfile,
        });
        return;
      }

      setStep((current) => Math.min(current + 1, quizQuestions.length - 1));
    }, 260);
  };

  const goBack = () => {
    clearAdvanceTimer();
    setIsAdvancing(false);

    if (completed) {
      setCompleted(false);
      setStep(quizQuestions.length - 1);
      return;
    }

    setStep((current) => Math.max(0, current - 1));
  };

  const restart = () => {
    clearAdvanceTimer();
    setStarted(false);
    setCompleted(false);
    setIsAdvancing(false);
    setStep(0);
    setAnswers({});
    window.requestAnimationFrame(() => coverTitleRef.current?.focus());
  };

  return (
    <section
      className={cx("quiz-section", !started && "quiz-section--cover")}
      id="quiz"
      aria-labelledby="quiz-title"
    >
      <div className="section-shell quiz-section__layout">
        <div className="quiz-section__intro">
          <span>{t.quiz.eyebrow}</span>
          <h2 id="quiz-title">{t.quiz.title}</h2>
          <p>{t.quiz.description}</p>
        </div>

        <div
          className={cx("quiz-card", !started && "quiz-card--cover")}
          aria-live="polite"
        >
          <div className="quiz-card__progress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>

          {!started ? (
            <div className="quiz-card__body quiz-cover">
              <div className="quiz-cover__brand">
                <Image
                  src={business.assets.logo}
                  alt=""
                  width={64}
                  height={64}
                />
                <span>{t.common.brand}</span>
              </div>
              <span className="quiz-cover__eyebrow">{t.quiz.cover.eyebrow}</span>
              <h3 ref={coverTitleRef} tabIndex={-1}>
                {t.quiz.cover.title}
              </h3>
              <p>{t.quiz.cover.text}</p>
              <ul className="quiz-cover__chips" aria-label={t.quiz.cover.factsAria}>
                {t.quiz.cover.facts.map((fact, index) => {
                  const Icon = coverIcons[index] ?? Sparkles;
                  return (
                    <li key={fact}>
                      <Icon aria-hidden="true" />
                      <span>{fact}</span>
                    </li>
                  );
                })}
              </ul>
              <button
                type="button"
                className="quiz-card__primary quiz-cover__button"
                onClick={start}
              >
                <span>{t.quiz.cover.startButton}</span>
                <ArrowRight aria-hidden="true" />
              </button>
              <div className="quiz-cover__progress-note" aria-hidden="true">
                <span>0/{quizQuestions.length}</span>
                {t.quiz.cover.progress}
              </div>
            </div>
          ) : completed ? (
            <div className="quiz-card__body quiz-result">
              <span>{t.quiz.resultLabel}</span>
              <h3 ref={titleRef} tabIndex={-1}>
                {result.title}
              </h3>
              <p>{result.text}</p>
              <div className="quiz-result__summary">
                {quizQuestions.map((question) => (
                  <div key={question.id}>
                    <strong>{question.question}</strong>
                    <span>
                      {labels[question.id as QuizQuestionId] ?? t.quiz.notInformed}
                    </span>
                  </div>
                ))}
              </div>
              <div className="quiz-result__actions">
                <WhatsAppButton
                  origin="quiz"
                  section="quiz"
                  ctaId="quiz-result-whatsapp"
                  message={buildQuizWhatsAppMessage(labels, t)}
                  trackingPayload={{ recommended_profile: result.recommendedProfile }}
                >
                  {t.quiz.send}
                </WhatsAppButton>
                <button type="button" onClick={goBack}>
                  <ArrowLeft aria-hidden="true" />
                  {t.quiz.back}
                </button>
                <button type="button" onClick={restart}>
                  <RotateCcw aria-hidden="true" />
                  {t.quiz.restart}
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz-card__body quiz-question" key={currentQuestion.id}>
              <div className="quiz-question__meta">
                <span>
                  {t.quiz.questionProgress
                    .replace("{current}", String(step + 1))
                    .replace("{total}", String(quizQuestions.length))}
                </span>
                {" "}
                <span
                  aria-label={t.quiz.progressLabel.replace(
                    "{progress}",
                    String(progress),
                  )}
                >
                  {progress}%
                </span>
              </div>

              <h3 ref={titleRef} tabIndex={-1}>
                {currentQuestion.question}
              </h3>

              <div className="quiz-options" role="group" aria-label={currentQuestion.question}>
                {currentQuestion.options.map((option) => (
                  <button
                    type="button"
                    key={option.id}
                    className={cx(
                      "quiz-option",
                      selected === option.id && "quiz-option--selected",
                    )}
                    aria-pressed={selected === option.id}
                    disabled={isAdvancing}
                    onClick={() => selectAnswer(option.id, option.label)}
                  >
                    <span className="quiz-option__emoji" aria-hidden="true">
                      {option.emoji}
                    </span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>

              <div className="quiz-question__actions">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="quiz-card__back"
                  >
                    <ArrowLeft aria-hidden="true" />
                    {t.quiz.back}
                  </button>
                ) : (
                  <span className="quiz-question__hint">
                    <Sparkles aria-hidden="true" />
                    {t.quiz.hint}
                  </span>
                )}
                <span className="quiz-card__status" role="status" aria-live="polite">
                  {isAdvancing ? t.quiz.advancing : t.quiz.autoAdvance}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
