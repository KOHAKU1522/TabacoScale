import { useEffect } from "react"
import Documents from "../components/Documents/Documents";
import { DOCUMENTS } from "../const";

export default function OthersPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <br />
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
