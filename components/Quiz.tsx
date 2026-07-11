"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";
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
  const titleRef = useRef<HTMLHeadingElement>(null);

  const currentQuestion = quizQuestions[step];
  const labels = useMemo(() => getQuizAnswerLabels(answers), [answers]);
  const result = useMemo(() => getQuizResult(labels), [labels]);
  const selected = currentQuestion ? answers[currentQuestion.id] : undefined;
  const progress = completed
    ? 100
    : Math.round(((step + 1) / quizQuestions.length) * 100);

  useEffect(() => {
    if (started) {
      titleRef.current?.focus();
      trackEvent("quiz_step", {
        section: "quiz",
        quiz_step: completed ? "resultado" : step + 1,
      });
    }
  }, [started, step, completed]);

  const start = () => {
    setStarted(true);
    trackEvent("quiz_start", { section: "quiz", quiz_step: 1 });
  };

  const selectAnswer = (answerId: string, answerLabel: string) => {
    if (!currentQuestion) return;

    setAnswers((current) => ({
      ...current,
      [currentQuestion.id]: answerId,
    }));
    trackEvent("quiz_answer", {
      section: "quiz",
      quiz_step: step + 1,
      quiz_answer: answerLabel,
    });
  };

  const goNext = () => {
    if (!selected) return;

    if (step === quizQuestions.length - 1) {
      setCompleted(true);
      trackEvent("quiz_complete", {
        section: "quiz",
        recommended_profile: result.recommendedProfile,
      });
      return;
    }

    setStep((current) => current + 1);
  };

  const goBack = () => {
    if (completed) {
      setCompleted(false);
      setStep(quizQuestions.length - 1);
      return;
    }

    setStep((current) => Math.max(0, current - 1));
  };

  const restart = () => {
    setStarted(false);
    setCompleted(false);
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
            <div className="quiz-card__start">
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
            <div className="quiz-result">
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
                <button type="button" onClick={restart}>
                  <RotateCcw aria-hidden="true" />
                  Refazer
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz-question">
              <div className="quiz-question__meta">
                <span>
                  Pergunta {step + 1} de {quizQuestions.length}
                </span>
                <span>{progress}%</span>
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
                    onClick={() => selectAnswer(option.id, option.label)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="quiz-question__actions">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className="quiz-card__back"
                >
                  <ArrowLeft aria-hidden="true" />
                  Voltar
                </button>
                <button
                  type="button"
                  className="quiz-card__primary"
                  onClick={goNext}
                  disabled={!selected}
                >
                  {step === quizQuestions.length - 1 ? "Ver resultado" : "Continuar"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
