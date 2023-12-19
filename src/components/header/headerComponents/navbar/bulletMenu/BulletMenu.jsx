import React from "react";
import styles from "./BulletMenu.module.css";
import Image from "next/image";
// Photo source import
import Bullets from "/public/svg/dots.svg";
export default function BulletMenu() {
  return (
    <div className={styles.burgerMenu}>
      <Image
        // ჩამოსაშლელი ბულეტ-მენიუ (გამოჩნდეს მობაილ ბრეიქფოინთზე / გაქრეს ტაბლეტზე და +)
        src={Bullets}
        className={styles.navItem}
        alt="bulets"
      />
    </div>
  );
}
