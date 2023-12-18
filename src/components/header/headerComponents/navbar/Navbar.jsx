import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import NavbarItem from "./navbarItem/NavbarItem";
import Profile from "../profileIcon/ProfileIcon";

// Photo source import
import Home from "/public/svg/home.svg";
import MyNetwork from "/public/svg/network.svg";
import Jobs from "/public/svg/jobs.svg";
import Notifications from "/public/svg/notifications.svg";
import Bullets from "/public/svg/dots.svg";

const navItems = [
  { title: "Home", src: Home, alt: "Home", id: 1 },
  { title: "My Network", src: MyNetwork, alt: "My Network", id: 2 },
  { title: "Jobs", src: Jobs, alt: "Jobs", id: 3 },
  { title: "Notifications", src: Notifications, alt: "Notifications", id: 5 },
];

export default function Navbar() {
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
            />
          );
        })}
      </div>
      <Profile />
      <div className={styles.burgerMenu}>
        <Image
          // ჩამოსაშლელი ბულეტ-მენიუ (გამოჩნდეს მობაილ ბრეიქფოინთზე / გაქრეს ტაბლეტზე და +)
          src={Bullets}
          className={styles.navItem}
          alt="bulets"
        />
      </div>
    </nav>
  );
}
