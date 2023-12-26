import ProfileComponent from "@/components/profileComponent/ProfileComponent";
import styles from "./page.module.css";
import Feed from "@/components/feed/Feed";
import CustomAside from "@/components/customAside/CustomAside";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProfileComponent />
      <Feed />
      <CustomAside />
    </main>
  );
}
