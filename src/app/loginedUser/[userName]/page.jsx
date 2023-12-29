"use client";

import React from "react";
import styles from "./page.module.css";
import ComponentBg from "@/components/componentBg/ComponentBg";
import UserPic from "@/components/userPic/UserPic";
import FollowBtn from "@/components/buttons/followBtn/FollowBtn";
import Footer from "@/components/footer/Footer";
import { useSession } from "next-auth/react";
import Loading from "@/components/loading/Loading";

export default function page({ params }) {
  const session = useSession();
  if (session.status == "loading") return <Loading />;
  if (params.userName.replace("%20", " ") == session.data?.user?.name) {
    return (
      <main className={styles.main}>
        <ComponentBg>
          <div className={styles.userProfileWrapper}>
            <div className={styles.userBackground}></div>
            <div className={styles.profilePicContainer}>
              <UserPic
                width={160}
                height={160}
                src={session.data?.user?.image}
              />
            </div>
            <div className={styles.userProfile}>
              <h1 className={styles.userName}>{session.data?.user?.name}</h1>
              <p className={styles.userProffesion}>{session.data?.user?.email}</p>
              <p className={styles.userWorkPlace}></p>
              <p className={styles.userWorkTitle}></p>
              <p className={styles.user}></p>
              <div className={styles.buttonsContainer}>
                <FollowBtn title="Follow" />
                <FollowBtn title="Message" />
                <FollowBtn title="More" />
              </div>
            </div>
          </div>
        </ComponentBg>
        <Footer />
      </main>
    );
  } else {
    return <p style={{ marginTop: "52px" }}>Login First, user not found!</p>;
  }
}
