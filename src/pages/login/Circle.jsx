import styles from "./Circle.module.css";

export const Circle = ({ size = 50, className = "" }) => {
  const width = typeof size == "number" ? `${size}px` : size;
  return <div style={{ width }} className={`${styles.circle} ${className}`} />;
};
