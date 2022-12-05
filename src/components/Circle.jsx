import styles from "./Circle.module.css";

export const Circle = ({ size = 50, className = "", style = {} }) => {
  const width = typeof size == "number" ? `${size}px` : size;
  return (
    <div
      style={{ width, ...style }}
      className={`${styles.circle} ${className}`}
    />
  );
};
