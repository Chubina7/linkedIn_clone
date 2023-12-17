import React from "react";
import styles from "./ProfileComponent.module.css";
import Image from "next/image";
import DiscoverMore from "./childComponents/discoverMore/DiscoverMore";
import Profile from "./childComponents/profile/Profile";
// Photo source import
import DowrnArrow from "/public/svg/arrow-down.svg";
import UpArrow from "/public/svg/arrow-up.svg";

export default function ProfileComponent() {
  return (
    <section className={styles.wrapper}>
      <Profile />
      <DiscoverMore />
      <div className={styles.showMoreBar}>
        <div className={styles.hoverContainer}>
          <p className={styles.text}>Show More</p>
          <Image src={UpArrow} alt="dropDown/dropUp" className={styles.arrow} />
        </div>
      </div>
    </section>
  );
}
