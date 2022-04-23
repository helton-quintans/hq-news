import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function SinginButton() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button type="button" className={styles.SinginButton}>
      <FaGithub color="#04d361" />
      Helton Quintãns
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.SinginButton}>
      <FaGithub color="#eba417" />
      Sing in with Github
    </button>
  );
}
