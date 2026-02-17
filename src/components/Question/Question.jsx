import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Question.module.css";

export default function Question({
    children,
    type,
    value,
    className = "",
    placeholder,
    unit,
    onChange,
}) {
    return (
        <>
            <div className={styles.question}>
                <p className={styles.text}>
                    {children}
                </p>
                <div className={styles.input}>
                    <Input
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                    <p
                        className={styles.unit}
                    >{unit}</p>
                </div>
            </div>
        </>
    );
};
