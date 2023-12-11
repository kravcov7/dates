import styles from "./page.module.css";
import History from "@/components/History";
import data from "@/assets/data";

export default function Home() {
  return (
    <main className={styles.main}>
      <History data={data} />
    </main>
  );
}
