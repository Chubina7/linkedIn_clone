import React from "react";
import styles from "./page.module.css";
import UsersFetching from "./components/usersFetching/UsersFetching";
import ManageCont from "./components/manageCont/ManageCont";

export const metadata = {
  title: "My Network",
  description: "Cloned by Luka Chubinidze",
};

export default function page() {
  return (
    <main className={styles.main}>
      <ManageCont />
      <UsersFetching />
    </main>
  );
}
