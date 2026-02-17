import { Link } from "react-router-dom";
import styles from "./Introduction.module.css";
import { ROUTES } from "../../const";

export default function Introduction() {
    return (
        <>
            <div className={styles.introduction}>
                <h1 className={styles.title}>{`＜タバコスケール＞`}</h1>
                <pre className={styles.text}>
                    {`タバコスケールは、
「今までどれくらい吸ってきたんだろう？」を
おもしろく、ちょっとリアルに可視化するアプリです。

これまでに吸ったタバコの本数を
スカイツリーなど実在する建物の高さに例えたり、
タバコに使ったお金を海外旅行
1回分などに置き換えて表示します。

卒煙できた方は、
「もし吸い続けていたら失っていたお金」ではなく、
「実際に節約できた金額」を見ることができます。

数字で見ると、意外と驚くかもしれません。`}
                </pre>
                <Link className={styles.link} to={ROUTES.DIAGNOSIS}>さっそく診断を開始する</Link>
            </div>
        </>
    )
}