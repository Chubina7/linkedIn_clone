"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./ProfileComponent.module.css";
import Image from "next/image";
import DiscoverMore from "./childComponents/discoverMore/DiscoverMore";
import Profile from "./childComponents/profile/Profile";
import { LoginContext } from "@/context/LoginContext";
// Photo source import
import DowrnArrow from "/public/svg/arrow-down.svg";
import UpArrow from "/public/svg/arrow-up.svg";

export default function ProfileComponent() {
  const { userLogined } = useContext(LoginContext);
  const [moreShown, setMoreShown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const showMoreHandler = () => {
    setMoreShown(!moreShown);
  };
  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
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
