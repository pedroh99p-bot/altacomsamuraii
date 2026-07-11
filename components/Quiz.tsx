"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, RotateCcw, Sparkles } from "lucide-react";
import {
  buildQuizWhatsAppMessage,
  getQuizAnswerLabels,
  getQuizResult,
  quizQuestions,
  type QuizAnswers,
} from "@/data/quiz";
import { trackEvent } from "@/lib/analytics";
import { cx } from "@/lib/utils";
import { WhatsAppButton } from "./WhatsAppButton";

export function Quiz() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [completed, setCompleted] = useState(false);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const advanceTimerRef = useRef<number | null>(null);

  const currentQuestion = quizQuestions[step];
  const labels = useMemo(() => getQuizAnswerLabels(answers), [answers]);
  const result = useMemo(() => getQuizResult(labels), [labels]);
  const selected = currentQuestion ? answers[currentQuestion.id] : undefined;
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
    const nextLabels = getQuizAnswerLabels(nextAnswers);
    const nextResult = getQuizResult(nextLabels);

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
  };

  return (
    <section className="quiz-section" id="quiz" aria-labelledby="quiz-title">
      <div className="section-shell quiz-section__layout">
        <div className="quiz-section__intro">
          <span>Pré-atendimento</span>
          <h2 id="quiz-title">Descubra a aula ideal para você.</h2>
          <p>
            Responda em menos de um minuto e leve para o WhatsApp uma mensagem
            útil, com seu nível, objetivo, preferência de formato e principal
            dúvida.
          </p>
        </div>

        <div className="quiz-card" aria-live="polite">
          <div className="quiz-card__progress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>

          {!started ? (
            <div className="quiz-card__body quiz-card__start">
              <h3 ref={titleRef} tabIndex={-1}>
                Comece pelo seu momento atual.
              </h3>
              <p>
                Não existe resposta certa. As respostas só servem para facilitar
                a conversa com Samurai.
              </p>
              <button type="button" className="quiz-card__primary" onClick={start}>
                Começar quiz
              </button>
            </div>
          ) : completed ? (
            <div className="quiz-card__body quiz-result">
              <span>Resultado</span>
              <h3 ref={titleRef} tabIndex={-1}>
                {result.title}
              </h3>
              <p>{result.text}</p>
              <div className="quiz-result__summary">
                {quizQuestions.map((question) => (
                  <div key={question.id}>
                    <strong>{question.question}</strong>
                    <span>{labels[question.id] ?? "Não informado"}</span>
                  </div>
                ))}
              </div>
              <div className="quiz-result__actions">
                <WhatsAppButton
                  origin="quiz"
                  section="quiz"
                  ctaId="quiz-result-whatsapp"
                  message={buildQuizWhatsAppMessage(labels)}
                  trackingPayload={{ recommended_profile: result.recommendedProfile }}
                >
                  Enviar respostas ao Samurai
                </WhatsAppButton>
                <button type="button" onClick={goBack}>
                  <ArrowLeft aria-hidden="true" />
                  Voltar
                </button>
                <button type="button" onClick={restart}>
                  <RotateCcw aria-hidden="true" />
                  Refazer
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz-card__body quiz-question" key={currentQuestion.id}>
              <div className="quiz-question__meta">
                <span>
                  Pergunta {step + 1} de {quizQuestions.length}
                </span>
                {" "}
                <span aria-label={`Progresso ${progress}%`}>{progress}%</span>
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
                    Voltar
                  </button>
                ) : (
                  <span className="quiz-question__hint">
                    <Sparkles aria-hidden="true" />
                    Escolha uma resposta para avançar
                  </span>
                )}
                <span className="quiz-card__status" role="status" aria-live="polite">
                  {isAdvancing ? "Avançando..." : "Avanço automático"}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
