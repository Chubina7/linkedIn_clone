import React from "react";
import styles from "./Recomendations.module.css";
import Image from "next/image";
import RecomendedUser from "./recomendedUser/RecomendedUser";
// Photo source import
import MoreInfoIcon from "/public/svg/info.svg";
import RightPointedArrow from "/public/svg/arrowToRight.svg";
import ComponentBg from "@/components/componentBg/componentBg";

export default function Recomendations() {
  return (
    <ComponentBg>
      <div className={styles.upperContainer}>
        <p className={styles.heading}>Add to your feed</p>
        <Image
          src={MoreInfoIcon}
          alt="more info icon"
          className={styles.moreInfoIcon}
        />
      </div>
      <RecomendedUser />
      <RecomendedUser />
      <RecomendedUser />
      <div className={styles.bottomContainer}>
        <p className={styles.bottomText}>View all recomendations</p>
        <Image
          src={RightPointedArrow}
          alt="arrow to right"
          className={styles.arrow}
        />
      </div>
    </ComponentBg>
  );
}
