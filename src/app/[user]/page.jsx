"use client";

import { React, useEffect, useState } from "react";
import styles from "./page.module.css";
import Loading from "@/components/loadingState/Loading";
import UserPic from "@/components/userPic/UserPic";
import Footer from "@/components/footer/Footer";
// Photo source import
import FollowBtn from "@/components/buttons/followBtn/FollowBtn";

export default function page({ params }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getDummyData = async () => {
      const resp = await fetch(`https://dummyjson.com/users/${params.user}`);
      const result = await resp.json();
      setData(result);
    };
    const getLoginedUserData = async () => {};
    getDummyData();
  }, []);

  return (
    <main className={styles.main}>
      {data ? (
        <div className={styles.wrapper}>
          <div className={styles.userProfileWrapper}>
            <div className={styles.userBackground}></div>
            <div className={styles.profilePicContainer}>
              <UserPic width={160} height={160} src={data.image} />
            </div>
            <div className={styles.userProfile}>
              <h1 className={styles.userName}>
                {data.firstName} {data.lastName}
              </h1>
              <p className={styles.userProffesion}>
                {data.company.title} at "{data.company.name}"
              </p>
              <p className={styles.userDescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi quis ex aliquam minima? Repellat, dolores!
              </p>
              <div className={styles.buttonsContainer}>
                <FollowBtn title="Follow" />
                <FollowBtn title="Message" />
                <FollowBtn title="More" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <Footer />
    </main>
  );
}
