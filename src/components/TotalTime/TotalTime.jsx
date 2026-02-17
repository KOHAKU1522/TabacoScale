import { Navigate, useLocation } from "react-router-dom";
import { DEFAULT, ROUTES, TIME_EXAMPLE } from "../../const";
import styles from "./TotalTime.module.css";

export default function TotalTime({
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

    function calculateTotalTime(answersList) {
        const totalWastedTime = answersList.reduce((acc, brandAnswers) => {
            const daily = Number(brandAnswers[0]);
            const months = Number(brandAnswers[1]);

            const days = months * 30;

            const totalTime = (daily * days * DEFAULT.MINUTES_PER_CIGARETTE) / 60;

            return acc + totalTime;
        }, 0);

        return totalWastedTime;
    };

    const totalTime = calculateTotalTime(answersList);

    function findClosestTimeExample(totalTime) {
        return TIME_EXAMPLE
            .filter(item => item.lostTime <= totalTime)
            .reduce((closest, current) => {
                if (!closest) return current;
                return current.lostTime > closest.lostTime
                    ? current
                    : closest;
            }, null);
    };
    const closestExample = findClosestTimeExample(totalTime);

    function formatTimeComment(comment, totalTime) {
        return comment.replace(
            "【TIME】",
            totalTime.toLocaleString()
        );
    }

    return (
        <>
            <br />
            <div className={className}>
                <h3 className={styles.title}>
                    あなたが今までタバコに使った時間は<br />約{totalTime.toLocaleString()}時間です。
                </h3>

                {closestExample && (
                    <div>
                        <p className={styles.sentence}>
                            これは「{closestExample.example}」に相当します。<br />{formatTimeComment(
                                closestExample.comment,
                                totalTime
                            )}
                        </p>
                        <img
                            className={styles.img}
                            src={closestExample.src}
                            alt={closestExample.example}
                        />
                    </div>
                )}
            </div>
        </>
    )
};
