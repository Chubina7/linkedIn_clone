"use client";

import React, { useContext, useState } from "react";
import styles from "./ProfileComponent.module.css";
import Image from "next/image";
import DiscoverMore from "./childComponents/discoverMore/DiscoverMore";
import Profile from "./childComponents/profile/Profile";
import { LoginContext } from "@/context/LoginContext";
import Link from "next/link";
import FollowBtn from "../buttons/followBtn/FollowBtn";
import { useSession } from "next-auth/react";

// Photo source import
import LoginImage from "/public/svg/arrowToRight.svg";
import DowrnArrow from "/public/svg/arrow-down.svg";
import UpArrow from "/public/svg/arrow-up.svg";

export default function ProfileComponent() {
  const session = useSession();

  const { userImage, userName } = useContext(LoginContext);
  const [moreShown, setMoreShown] = useState(false);
 

  // useEffect(() => {
  //   window.addEventListener("resize", resizeHandler);
  //   return () => {
  //     window.removeEventListener("resize", resizeHandler);
  //   };
  // }, []);

  if (session.status == "authenticated") {
    return (
      <aside className={styles.wrapper}>
        <Profile
          // moreIsShown={windowWidth > 768 || moreShown}
          src={userImage}
          name={userName}
        />
        {/* {(windowWidth > 768 || moreShown) && <DiscoverMore />} */}
        <div className={styles.showMoreBar}>
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
  if (session.status == "unauthenticated") {
    return (
      <aside className={styles.wrapper}>
        <Link href={"/login"}>
          <FollowBtn title="Login / Sign Up" src={LoginImage} />
        </Link>
      </aside>
    );
  }
}
