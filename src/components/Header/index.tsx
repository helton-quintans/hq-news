import SinginButton from "../SinginButton";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="hq.news" />
        <nav>
          <a className={styles.active} href="">
            Home
          </a>
          <a href="">Posts</a>
          <a href="">Buy me a Coffe</a>
        </nav>
        <SinginButton />
      </div>
    </header>
  );
}
