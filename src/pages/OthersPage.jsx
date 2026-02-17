import { useEffect } from "react"
import Documents from "../components/Documents/Documents";
import { DOCUMENTS } from "../const";
import styles from "./Pages.module.css";

export default function OthersPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.page}> </div>
      <h4>
        他の開発したアプリケーション一覧です。<br />
        勉強がてら制作したのでクオリティは微妙です
      </h4>
      {DOCUMENTS.map((item, index) => (
        <Documents
          title={item.title}
          imageSrc={item.src}
          link={item.link}
        />
      ))}
    </>
  );
}
