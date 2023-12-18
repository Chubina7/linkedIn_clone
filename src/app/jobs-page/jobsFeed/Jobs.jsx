import React from "react";
import styles from "./Jobs.module.css";
import ComponentBg from "@/components/componentBg/ComponentBg";
import ExactJob from "./exactJob/ExactJob";

export default function Jobs() {
  return (
    <ComponentBg>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Jobs For You</h1>
        <p className={styles.description}>
          Based on your profile search and history:
        </p>
      </div>
      <div className={styles.wrapper}>
        <ExactJob />
        <ExactJob />
        <ExactJob />
        <ExactJob />
        <ExactJob />
        <ExactJob />
      </div>
    </ComponentBg>
  );
}
