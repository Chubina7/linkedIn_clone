import React from "react";
import styles from "./DiscoverMore.module.css";
import Image from "next/image";
// Photo source import
import PlusIcon from "/public/svg/plus.svg";
import ComponentBg from "@/components/componentBg/componentBg";

export default function DiscoverMore() {
  return (
    <ComponentBg>
      <div className={styles.groupsContainer}>
        <p className={styles.text}>Groups</p>
      </div>
      <div className={styles.eventsContainer}>
        <p className={styles.text}>Events</p>
        <div className={styles.plusIconContainer}>
          <Image src={PlusIcon} alt="plus icon" className={styles.plusIcon} />
        </div>
      </div>
      <div className={styles.hashtagsContainer}>
        <p className={styles.text}>Followed Hashtags</p>
      </div>
      <div className={styles.discoverMoreBar}>
        <p className={styles.discoverMore}>Discover More</p>
      </div>
    </ComponentBg>
  );
}
