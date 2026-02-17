import styles from "./Input.module.css";

const INPUT_CONFIG = {
  text: {
    placeholder: "ヤマダ タロウ",
    className: styles.textInput,
  },
  number: {
    placeholder: "0",
    className: styles.numberInput,
  },
};

export default function Input({
  type = "number",
  disabled = false,
  className = "",
  value = "",            // ← undefined 対策
  onChange,
  placeholder,
}) {
  const config = INPUT_CONFIG[type] ?? INPUT_CONFIG.number;

  const handleChange = (e) => {
    onChange?.(e.target.value);     // ← 値だけ渡す
  };

  return (
    <input
      type={type}
      disabled={disabled}
      className={`${styles.input} ${config.className} ${className}`}
      value={value}
      onChange={handleChange}
      placeholder={placeholder ?? config.placeholder}
    />
  );
}
