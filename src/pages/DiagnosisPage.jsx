import { useNavigate } from "react-router-dom";
import Question from "../components/Question/Question";
import { QUESTIONS, ROUTES } from "../const";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import styles from "./Pages.module.css";

export default function DiagnosisPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.RESULT, {
      state: {
        answersList,
      },
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [answersList, setAnswersList] = useState([
    QUESTIONS.map(() => "")
  ]);

  // const handleChange = (index, value) => {
  //   const newAnswers = [...answersList];
  //   newAnswers[index] = value;
  //   setAnswersList(newAnswers);
  // };

  const handleAddBrand = () => {
    setAnswersList(prev => [
      ...prev,
      QUESTIONS.map(() => "")
    ]);
  };

  const isAllRequiredAnswered = answersList.every((brandAnswers) =>
    QUESTIONS.every((q, qIndex) => {
      if (!q.required) return true;
      return String(brandAnswers[qIndex]).trim() !== "";
    })
  );

  return (
    <>
    <div className={styles.page}></div>
      {answersList.map((answers, brandIndex) => (
        <div key={brandIndex}>
          <h3>銘柄 {brandIndex + 1}</h3>

          {QUESTIONS.map((q, qIndex) => (
            <Question
              key={qIndex}
              type={q.type}
              value={answers[qIndex]}
              onChange={(v) => {
                const newList = [...answersList];
                newList[brandIndex][qIndex] = v;
                setAnswersList(newList);
              }}
              placeholder={q.placeholder}
              unit={q.unit}
            >
              {q.question}
            </Question>
          ))}
        </div>
      ))};

      <Button
        onClick={() => handleAddBrand()}
      >
        他の銘柄を追加
      </Button>

      <Button
        disabled={!isAllRequiredAnswered}
        onClick={handleClick}
      >
        結果を確認する
      </Button>
    </>
  )
};
