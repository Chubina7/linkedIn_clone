"use client";

import React from "react";
import styles from "./Navbar.module.css";
import NavbarItem from "./navbarItem/NavbarItem";
import Profile from "../profileIcon/Profile";
import Link from "next/link";
import FollowBtn from "@/components/buttons/followBtn/FollowBtn";
import { useSession } from "next-auth/react";
import Loading from "@/components/loading/Loading";
// Photo source import
import LoginImage from "/public/svg/arrowToRight.svg";
import Home from "/public/svg/home.svg";
import MyNetwork from "/public/svg/network.svg";
import Jobs from "/public/svg/jobs.svg";

const navItems = [
  { title: "Home", src: Home, alt: "Home", href: "/", id: 1 },
  {
    title: "My Network",
    src: MyNetwork,
    alt: "My Network",
    href: "/mynetwork",
    id: 2,
  },
  { title: "Jobs", src: Jobs, alt: "Jobs", href: "/jobs-page", id: 3 },
];

export default function Navbar() {
  const session = useSession();

  if (session.status == "loading") return <Loading />;
  if (session.status == "authenticated") {
    return (
      <nav className={styles.nav}>
        <div className={styles.navItems}>
          {navItems.map((item) => {
            return (
              <NavbarItem
                src={item.src}
                alt={item.alt}
                key={item.id}
                title={item.title}
                href={item.href}
              />
            );
          })}
        </div>
        <Profile />
      </nav>
    );
  }
  if (session.status == "unauthenticated") {
    return (
      <nav className={styles.nav}>
        <Link href={"/login"}>
          <FollowBtn title="Login / Sign Up" src={LoginImage} />
        </Link>
      </nav>
    );
  }
}
