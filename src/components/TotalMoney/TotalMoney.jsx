import { Navigate, useLocation } from "react-router-dom";
import { DEFAULT, MONEY_EXAMPLE, ROUTES } from "../../const";
import styles from "./TotalMoney.module.css";

export default function TotalMoney({
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

    function calculateTotalMoney(answersList) 
        const totalWastedMoney = answersList.reduce((acc, brandAnswers) => {
            const daily = Number(brandAnswers[0]);
            const months = Number(brandAnswers[1]);
            const pricePerBox = Number(brandAnswers[2]) || DEFAULT.PRICE_PER_PACK;

            const days = months * 30;

            const spent = ((daily * days / DEFAULT.CIGARETTES_PER_PACK) * pricePerBox) / 10000;

            return acc + spent;
        }, 0);

        return totalWastedMoney;
    };

    const totalMoneyYen = calculateTotalMoney(answersList) * 10000;

    const affordableItems = MONEY_EXAMPLE.filter(item =>
        item.price <= totalMoneyYen
    );

    function shuffleArray(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }
    const selectedItems = shuffleArray(affordableItems).slice(0, 9);

    const resultItems = selectedItems.map(item => {
        const count = Math.max(
            1,
            Math.floor(totalMoneyYen / item.price)
        );

        const formattedCount = count.toLocaleString();

        return {
            ...item,
            formattedCount,
            count,
        };
    });

    return (
        <>
            <br />
            <div className={className}>
                <h3 className={styles.title}>
                    あなたが今までタバコに使ったお金は<br />約{(calculateTotalMoney(answersList))
                        .toFixed(2)
                        .toLocaleString() * 1}万円です。
                        {/* 小数の0をカットするために1をかけている */}
                </h3>
                <h3 className={styles.subTitle}>
                    使ったお金を身近なものに例えると...？
                </h3>

                <div className={styles.elements}>
                    {resultItems.map((item, index) => (
                        <div key={index}>
                            <p className={styles.sentence}>
                                {item.name}：{item.formattedCount}{item.unit}分
                            </p>
                            <img className={styles.img} src={item.src} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
