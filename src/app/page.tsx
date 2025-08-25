import styles from "./page.module.css";
import MainHomePage from "@/component/MainHomePage/MainHomePage";

export default function Home() {
  return (
    <div className={styles.page}>
     <MainHomePage/>
    </div>
  );
}
