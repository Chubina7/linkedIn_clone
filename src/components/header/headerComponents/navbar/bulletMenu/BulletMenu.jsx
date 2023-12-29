"use client"

import React, { useState } from "react";
import styles from "./BulletMenu.module.css";
import Image from "next/image";
// Photo source import
import Bullets from "/public/svg/dots.svg";

export default function BulletMenu() {
  const [modalOpen, setModalOpen] = useState(false);
  
  const modalOpenHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className={styles.burgerMenu} onClick={modalOpenHandler}>
        <Image src={Bullets} className={styles.navItem} alt="bulets" />
      </div>
    </>
  );
}
