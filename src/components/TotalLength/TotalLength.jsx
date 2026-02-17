import { Navigate, useLocation } from "react-router-dom";
import { DEFAULT, LENGTH_EXAMPLE, ROUTES, } from "../../const";
import styles from "./TotalLength.module.css";

export default function TotalLength({
    className = "",
}) {

    const location = useLocation();
    const answersList = location.state?.answersList;

    console.log("location.state", location.state);
    console.log("answersList", answersList);

    if (!answersList) {
        alert("エラー: answersList が見つかりませんでした。");
        return <Navigate to={ROUTES.HOME} />;
    };

    function calculateTotalLength(answersList) {
        const totalWastedLength = answersList.reduce((acc, brandAnswers) => {
            const daily = Number(brandAnswers[0]);
            const months = Number(brandAnswers[1]);
            const length = Number(brandAnswers[3]) || DEFAULT.LENGTH_PER_CIGARETTE;

            const days = months * 30;

            const totalLength = (daily * days * length) / 1000;

            return acc + totalLength;
        }, 0);

        return totalWastedLength;
    };

    const totalLength = calculateTotalLength(answersList);

    function findClosestLengthExample(totalLength) {
        const sorted = [...LENGTH_EXAMPLE].sort(
            (a, b) => a.length - b.length
        );

        const result = sorted
            .filter(example => totalLength >= example.length)
            .pop();

        return result ?? sorted[0];
    };

    const lengthExample = findClosestLengthExample(totalLength);

    const defaultPixel = 150;

    const lengthRatio = lengthExample.length / totalLength;
    console.log("lengthRatio:" + lengthRatio);

    const buildingPixel = Math.floor(lengthRatio * defaultPixel)
    console.log("itemPixel:" + buildingPixel + "px");

    return (
        <>
            <br />
            <div className={className}>
                <h3 className={styles.title}>
                    あなたがこれまでに吸ったタバコの長さは<br />
                    約 {Math.floor(totalLength).toLocaleString()} m
                </h3>

                <div className={styles.imgFolder}>
                    <img className={styles.tabakoImage} src="/images/tabako.png" alt="tabako-image" 
                    style={{ height: defaultPixel }}
                    />
                    <img className={styles.img} src={lengthExample.src} alt="lengthExample-src"
                        style={{ height: buildingPixel }}
                    />
                </div>

                <p className={styles.sentence}>
                    あなたがこれまでに吸ったタバコを縦に並べると、<br />
                    <strong>{lengthExample.name}（{lengthExample.length.toLocaleString()}m）</strong>よりも長くなります。
                </p>
            </div>
        </>
    );
};
