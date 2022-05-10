import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SinginButton() {
  const { data: session } = useSession();

  console.log(session);

  //const isUserLoggedIn = false;

  return session ? (
    <button
      type="button"
      className={styles.singinButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.singinButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sing in with Github
    </button>
  );
}
