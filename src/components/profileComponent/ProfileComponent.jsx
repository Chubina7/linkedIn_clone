"use client";

import React, { useEffect, useState } from "react";
import styles from "./ProfileComponent.module.css";
import Image from "next/image";
import DiscoverMore from "./childComponents/discoverMore/DiscoverMore";
import Profile from "./childComponents/profile/Profile";
// Photo source import
import DowrnArrow from "/public/svg/arrow-down.svg";
import UpArrow from "/public/svg/arrow-up.svg";

export default function ProfileComponent() {
  const [moreShown, setMoreShown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const showMoreHandler = () => {
    setMoreShown(!moreShown);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
      console.log(windowWidth);
    };
  }, []);

  return (
    <aside className={styles.wrapper}>
      <Profile moreIsShown={windowWidth > 768 || moreShown} />
      {(windowWidth > 768 || moreShown) && <DiscoverMore />}
      <div className={styles.showMoreBar} onClick={showMoreHandler}>
        <div className={styles.hoverContainer}>
          <p className={styles.text}>Show {moreShown ? "Less" : "More"}</p>
          <Image
            src={moreShown ? UpArrow : DowrnArrow}
            alt="dropDown/dropUp"
            className={styles.arrow}
          />
        </div>
      </div>
    </aside>
  );
}
