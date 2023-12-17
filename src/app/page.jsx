import ProfileComponent from "@/components/profileComponent/ProfileComponent";
import styles from "./page.module.css";
import Feed from "@/components/feed/Feed";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProfileComponent />
      {/* <Feed /> */}
    </main>
  );
}
