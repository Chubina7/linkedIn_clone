import React from "react";
import styles from "./page.module.css";
import ComponentBg from "@/components/componentBg/componentBg";
import UsersFetching from "./components/usersFetching/UsersFetching";
import ManageCont from "./components/manageCont/ManageCont";

export default function page() {
  return (
    <main className={styles.main}>
      <ManageCont />
      <UsersFetching />
    </main>
  );
}
