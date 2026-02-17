import { Navigate, useLocation } from "react-router-dom";
import { COMMENT, DEFAULT, MONEY_EXAMPLE, ROUTES } from "../const";
import Display from "../components/Display/Display";
import { useEffect } from "react";
import styles from "./Pages.module.css";

export default function ResultPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.page}> </div>
      <Display></Display>
    </>
  );
};