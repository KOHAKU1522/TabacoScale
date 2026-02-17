import { useEffect } from "react";
import { CODES } from "../codes";
import Codes from "../components/Codes/Codes";
import styles from "./Pages.module.css";

export default function SourcePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.page}></div>
      {CODES.map((CODES, index) => (
        <Codes
          title={CODES.title}
          sentence={CODES.sentence}
        />
      ))}
    </>
  );
};
