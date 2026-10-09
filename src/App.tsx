
import { useState } from 'react';
import { questions } from './data';
import { chapter2Questions } from './chapter2';
import { chapter3Questions } from './chapter3';
import { chapter5Questions } from './chapter5';
import { chapter6Questions } from './chapter6';
import { chapter7Questions } from './chapter7';

type Question = {
  question: string;
  answer: string;
  wrong: string[];
};

type QuizItem = {
  question: string;
  answer: string;
  options: string[];
};

// Register each chapter's questions here.
// Add new chapters as their question files become available.
const questionBank: Record<number, Question[]> = {
  2: chapter2Questions,
  3: chapter3Questions,
  4: questions,
  5: chapter5Questions,
  6: chapter6Questions,
  7: chapter7Questions
};

const chapters = [2, 3, 4, 5, 6, 7];

const shuffle = <T,>(items: T[]): T[] => {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

const newQuiz = (chapter: number): QuizItem[] => {
  const chapterQuestions = questionBank[chapter] ?? [];

  return shuffle(chapterQuestions).map(q => ({
    question: q.question,
    answer: q.answer,
    options: shuffle([q.answer, ...q.wrong])
  }));
};

export default function App() {
  const [page, setPage] = useState<'home' | 'quiz'>('home');
  const [activeChapter, setActiveChapter] = useState(4);
  const [quiz, setQuiz] = useState<QuizItem[]>(() => newQuiz(4));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = quiz[index];

  const restart = (chapter = activeChapter) => {
    setQuiz(newQuiz(chapter));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  const openChapter = (chapter: number) => {
    if (!questionBank[chapter]?.length) return;

    setActiveChapter(chapter);
    restart(chapter);
    setPage('quiz');
  };

  const choose = (option: string) => {
    if (selected !== null || !current) return;

    setSelected(option);

    if (option === current.answer) {
      setScore(s => s + 1);
    }
  };

  const next = () => {
    if (index === quiz.length - 1) {
      setFinished(true);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
    }
  };

  return (
    <main className="shell">
      {page === 'home' ? (
        <>
          <header className="home-header">
            <h1>
              PSY 213 <em>Study Guide</em>
            </h1>
          </header>

          <section className="chapter-grid">
            {chapters.map(chapter => {
              const count = questionBank[chapter]?.length ?? 0;
              const available = count > 0;

              return (
                <button
                  key={chapter}
                  className={
                    'chapter-card ' +
                    (available ? 'available' : 'unavailable')
                  }
                  onClick={() => openChapter(chapter)}
                  disabled={!available}
                >
                  <span className="chapter-label">
                    CHAPTER {chapter}
                  </span>

                  <strong>
                    <strong>Chapter {chapter}</strong>
                  </strong>

                  <span className="chapter-detail">
                    {available
                      ? `${count} questions · Start quiz →`
                      : 'Study materials on the way'}
                  </span>
                </button>
              );
            })}
          </section>
        </>
      ) : (
        <>
          <button
            className="back-button"
            onClick={() => setPage('home')}
          >
            ← All chapters
          </button>

          <header className="quiz-header">
  <h1>Chapter {activeChapter} Study</h1>
</header>

          {finished ? (
            <section className="panel result">
              <div className="eyebrow">
                QUIZ COMPLETE
              </div>

              <h2>
                {Math.round((score / quiz.length) * 100)}%
              </h2>

              <p>
                You got <strong>{score}</strong> out of{' '}
                <strong>{quiz.length}</strong> correct.
              </p>

              <button onClick={() => restart()}>
                Try again ↻
              </button>
            </section>
          ) : current ? (
            <section className="panel">
              <div className="top">
                <span>
                  Question {index + 1} / {quiz.length}
                </span>

                <span>{score} correct so far</span>
              </div>

              <div className="progress">
                <div
                  style={{
                    width: `${
                      ((index + 1) / quiz.length) * 100
                    }%`
                  }}
                />
              </div>

              <h2>{current.question}</h2>

              <div className="answers">
                {current.options.map((option, i) => (
                  <button
                    key={i}
                    className={
                      'choice ' +
                      (selected !== null
                        ? option === current.answer
                          ? 'correct'
                          : option === selected
                            ? 'incorrect'
                            : 'muted'
                        : '')
                    }
                    onClick={() => choose(option)}
                    disabled={selected !== null}
                  >
                    <span className="letter">
                      {String.fromCharCode(65 + i)}
                    </span>

                    <span>{option}</span>
                  </button>
                ))}
              </div>

              {selected !== null && (
                <div className="feedback">
                  <strong>
                    {selected === current.answer
                      ? '✓ Correct!'
                      : 'Not quite.'}
                  </strong>

                  <p>Answer: {current.answer}</p>

                  <button
                    className="next"
                    onClick={next}
                  >
                    {index === quiz.length - 1
                      ? 'See results'
                      : 'Next question'}{' '}
                    →
                  </button>
                </div>
              )}
            </section>
          ) : null}
        </>
      )}

      <p className="suggestions">
        If you have any suggestions, drop a message
        in the WhatsApp group chat and I'll look into it.
        If you have notes, flashcards, or other study
        materials you'd like to share, feel free
        to send those too!
      </p>

      <footer>
        Made for classmates · Free to use
      </footer>
    </main>
  );
}

