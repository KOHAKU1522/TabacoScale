import styles from "./Documents.module.css";

export default function Documents({
    title = "",
    imageSrc = "",
    link = "",
}) {

    return (
        <>
            <div className={styles.itemFolder}>
                <a href={link} target="_blank">
                    <p className={styles.title}>
                        {title}
                    </p>
                    <img className={styles.image} src={imageSrc} alt="" />
                </a>
            </div>
        </>
    )
}
