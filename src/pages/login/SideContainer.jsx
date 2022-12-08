import styles from "./SideContainer.module.css";

export const SideContainer = ({ children = null, className = "" }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};
