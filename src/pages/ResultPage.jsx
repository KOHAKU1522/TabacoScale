import { Navigate, useLocation } from "react-router-dom";
import { COMMENT, DEFAULT, MONEY_EXAMPLE, ROUTES } from "../const";
import Display from "../components/Display/Display";
import { useEffect } from "react";

export default function ResultPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Display></Display>
    </>
  );
};