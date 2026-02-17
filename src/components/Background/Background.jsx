import styles from "./Background.module.css";
import bg from "../../assets/white-smoke-for-background.png";

export default function Background() {
  return (
    <>
      <img className={styles.background} src={`${bg}`} alt="whiteSmoke" />
    </>
  )
}
