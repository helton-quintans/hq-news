import { useSession, signIn } from "next-auth/react";
import styles from "./styles.module.scss";

interface subscribeButtonProps {
  priceId: string;
}

export default function SubscribeButton({ priceId }: subscribeButtonProps) {
  const { data: session } = useSession();
  function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;

      //criação da checkout session
    }
  }
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
