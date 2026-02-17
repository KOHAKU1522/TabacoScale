import { useEffect } from "react";
import Introduction from "../components/Introduction/Introduction"
import styles from "./Pages.module.css";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.page}></div>
      <Introduction />
    </>
  )
}