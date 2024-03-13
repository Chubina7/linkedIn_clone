import React from "react";
import styles from "./Routes.module.css";
import NavbarItem from "../navbarItem/NavbarItem";
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

function Routes() {
  return (
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
  );
}

export default Routes;
