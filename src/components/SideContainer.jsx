import "./SideContainer.css";

export const SideContainer = ({ children = null, className = "" }) => {
  return <div className={`side-container ${className}`}>{children}</div>;
};
