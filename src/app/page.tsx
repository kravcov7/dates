import styles from "./page.module.css";
import History from "@/components/History";

export default function Home() {
  return (
    <main className={styles.main}>
      <History />
    </main>
  );
}
