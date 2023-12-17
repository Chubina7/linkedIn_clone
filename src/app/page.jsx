import ProfileComponent from "@/components/profileComponent/ProfileComponent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProfileComponent />
    </main>
  );
}
