// pages/quiz.js
import { useState } from 'react';

export default function Quiz() {
  const questions = [
    {
      id: 1,
      question: 'レトロゲームで有名な配管工の名前は？',
      choices: ['マリオ', 'ルイージ', 'ワリオ', 'ヨッシー'],
      correctAnswerIndex: 0,
    },
  ];
  
  const [answerIndex, setAnswerIndex] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[0];
  const isCorrect = answerIndex === currentQuestion.correctAnswerIndex;

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.choices.map((choice, i) => (
        <button
          key={i}
          onClick={() => setAnswerIndex(i)}
          disabled={isAnswered}
        >
          {choice}
        </button>
      ))}

      <div>
        {!isAnswered && answerIndex !== null && (
          <button onClick={() => setIsAnswered(true)}>回答する</button>
        )}
        {isAnswered && (
          <p>
            {isCorrect ? '正解!' : '不正解...'}
          </p>
        )}
      </div>
    </div>
  );
}
