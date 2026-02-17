import { Navigate, useLocation } from "react-router-dom";
import { COMMENT, ROUTES } from "../../const";

import styles from "./Display.module.css";

import TotalMoney from "../TotalMoney/TotalMoney";
import TotalTime from "../TotalTime/TotalTime";
import TotalLength from "../TotalLength/TotalLength";

export default function Display() {

  const location = useLocation();
  const answersList = location.state?.answersList;

  console.log("location.state", location.state);
  console.log("answersList", answersList);

  if (!answersList) {
    return <Navigate to={ROUTES.HOME} />;
  };

  const comment = () => {
    const smokingYear = answersList.reduce((acc, brandAnswers) => {
      const months = Number(brandAnswers[1]);
      const year = months / 12
      return acc + year;
    }, 0);

    const maxDaily = answersList.reduce((max, brandAnswers) => {
      const daily = Number(brandAnswers[0]) || 0; // 空文字対策
      return Math.max(max, daily);
    }, 0);

    if (maxDaily >= 20 && smokingYear >= 3) {
      return COMMENT[2];
    } else if (maxDaily >= 20) {
      return COMMENT[1];
    } else if (smokingYear >= 3) {
      return COMMENT[0];
    }
  }

  return (
    <>
      <br />
      <div
        className={styles.comment}
      >{comment()}</div>

      <TotalMoney
        className={styles.content}
      />

      <TotalTime
        className={styles.content}
      />

      <TotalLength
        className={styles.content}
      />
    </>
  );
};
