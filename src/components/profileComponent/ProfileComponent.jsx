"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./ProfileComponent.module.css";
import Image from "next/image";
import DiscoverMore from "./childComponents/discoverMore/DiscoverMore";
import Profile from "./childComponents/profile/Profile";
import { LoginContext } from "@/context/LoginContext";
import Link from "next/link";
import Button from "../buttons/button/Button";
// Photo source import
import LoginImage from "/public/svg/arrowToRight.svg";
import DowrnArrow from "/public/svg/arrow-down.svg";
import UpArrow from "/public/svg/arrow-up.svg";
import FollowBtn from "../buttons/followBtn/FollowBtn";
import { useSession } from "next-auth/react";
import Loading from "../loading/Loading";

export default function ProfileComponent() {
  const session = useSession();

  const { userLogined, userImage, userName } = useContext(LoginContext);
  const [moreShown, setMoreShown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const showMoreHandler = () => {
    setMoreShown(!moreShown);
  };
  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // if (session.status === "authenticated") {
    //   const userPostReq = async () => {
    //     try {
    //       const resp = await fetch("http://localhost:3000/api/users", {
    //         method: "POST",
    //         body: JSON.stringify({
    //           name: session?.data?.user?.name,
    //           surename: "",
    //           email: session?.data?.user?.email,
    //           phoneNumber: "",
    //           profileImage: session?.data?.user?.image,
    //           backgroundImage: "",
    //           workPlace: "",
    //           workTitle: "",
    //           followers: 0,
    //           posts: 0,
    //         }),
    //       });
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   userPostReq();
    // }
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <aside className={styles.wrapper}>
      {userLogined ? (
        <>
          <Profile
            moreIsShown={windowWidth > 768 || moreShown}
            src={userImage}
            name={userName}
          />
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
        </>
      ) : (
        <Link href={"/login"}>
          <FollowBtn title="Login / Sign Up" src={LoginImage} />
        </Link>
      )}
    </aside>
  );
}
