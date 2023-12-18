import Image from "next/image";
import React from "react";
import styles from "./NavbarItem.module.css";

export default function NavbarItem(props) {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.navItem}
        src={props.src}
        alt={props.alt}
        key={props.key}
      />
      <p className={styles.title}>{props.title}</p>
    </div>
  );
}
