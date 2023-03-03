import LoginForm from "./LoginForm";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styles from "./index.module.css";

export function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <LeftSide />
      <RightSide />
      <LoginForm />
    </div>
  );
}
