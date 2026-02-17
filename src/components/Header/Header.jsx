import { Link } from "react-router-dom"
import { ROUTES } from "../../const"

import "./Header.module.css";
import styles from "./Header.module.css";
import logo from "../../assets/app-logo.PNG";

export default function Header() {

    const data = [
        {
            name: "ホーム",
            path: ROUTES.HOME,
        },
        {
            name: "診断",
            path: ROUTES.DIAGNOSIS,
        },
        {
            name: "コード",
            path: ROUTES.SOURCE,
        },
        {
            name: "その他",
            path: ROUTES.OTHERS,
        },
    ];

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            <div className={styles.header}>
                <Link to={ROUTES.HOME}>
                    <img className={styles.logoImg} src={logo} alt="appLogo" />
                </Link>
                <ul>
                    {data.map((item, index) => (
                        //アロー関数の後に()を使うことでreturnを省略できる
                        <li key={index}>
                            <Link
                                to={item.path}
                                className={styles.link}
                                onClick={handleClick}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}