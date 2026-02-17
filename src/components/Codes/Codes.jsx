import styles from "./Codes.module.css";

export default function Codes({
    title,
    sentence,
}) {

    return (
        <>
            <div className={styles.codeFolder}>
                <p className={styles.codeTitle}>
                    {title}
                </p>
                <pre className={styles.codeSentence}>
                    {sentence}
                </pre>
            </div>
        </>
    );
}
