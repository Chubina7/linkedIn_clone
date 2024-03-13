"use client";

import React from "react";
import { useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Profile from "../profileIcon/Profile";
import Link from "next/link";
import FollowBtn from "@/components/buttons/followBtn/FollowBtn";
import Routes from "./routes/Routes";
// Photo source import
import LoginImage from "/public/svg/arrowToRight.svg";

export default function Navbar() {
  const session = useSession();

  return (
    <div className={styles.nav}>
      {session.status === "authenticated" ? (
        <>
          <Routes />
          <Profile />
        </>
      ) : (
        <Link href={"/login"}>
          <FollowBtn title="Login / Sign Up" src={LoginImage} />
        </Link>
      )}
    </div>
  );
}
