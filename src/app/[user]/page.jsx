"use client";

import { React, useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import Loading from "@/components/loading/loading";
import UserPic from "@/components/user/userPic/UserPic";
import Button from "@/components/buttons/button/Button";
import ComponentBg from "@/components/componentBg/ComponentBg";
import Footer from "@/components/footer/Footer";
// Photo source import
import TestImg from "/public/jpg/profile.jpg";
import FollowBtn from "@/components/buttons/followBtn/FollowBtn";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function page({ params }) {
  const { data, error } = useSWR(
    `https://dummyjson.com/users/${params.user}`,
    fetcher
  );

  if (error) return <h1 style={{ marginTop: "52px" }}>Failed to load</h1>;
  if (!data) return <h1 style={{ marginTop: "52px" }}>Loading...</h1>;

  return (
    <main className={styles.main}>
      {/* {data ? <h1>this is the user {params.user} page</h1> : <Loading />} */}
      <ComponentBg>
        <div className={styles.userProfileWrapper}>
          <div className={styles.userBackground}></div>
          <div className={styles.profilePicContainer}>
            <UserPic width={160} height={160} src={data.image} />
          </div>
          <div className={styles.userProfile}>
            <h1 className={styles.userName}>
              {data.firstName} {data.lastName}
            </h1>
            <p className={styles.userProffesion}>{data.company.title}</p>
            <p className={styles.userDescription}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              quis ex aliquam minima? Repellat, dolores!
            </p>
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
}
