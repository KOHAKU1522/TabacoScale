import styles from "./Button.module.css";

export default function Button({
  disabled=false,
  className="", // ここでundefの排除はできている
  onClick,
  children,
}) {
  return (
    <>
      <button
        disabled={disabled}
        className={`${styles.button} ${className}`}
        onClick={onClick}
      >
        {children ?? "ボタン"}
      </button>
    </>
  )
}
