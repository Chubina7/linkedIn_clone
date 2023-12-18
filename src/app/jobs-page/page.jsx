import React from "react";
import styles from "./page.module.css";
import JobsSorter from "./jobsSorter/JobsSorter";
import Jobs from "./jobsFeed/Jobs";
import AdditionalInfo from "./additionalInformation/AdditionalInfo";

export default function page() {
  return (
    <main className={styles.main}>
      <JobsSorter />
      <Jobs />
      <AdditionalInfo />
    </main>
  );
}
