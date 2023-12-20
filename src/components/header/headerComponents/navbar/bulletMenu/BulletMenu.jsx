"use client"

import React, { useState } from "react";
import styles from "./BulletMenu.module.css";
import Image from "next/image";
// Photo source import
import Bullets from "/public/svg/dots.svg";
import Backdrop from "@/components/backdrop/Backdrop";

export default function BulletMenu() {
  const [modalOpen, setModalOpen] = useState(false);
  
  const modalOpenHandler = () => {
    setModalOpen(!modalOpen);
  };
  const modalCloseHandler = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <div className={styles.burgerMenu} onClick={modalOpenHandler}>
        <Image src={Bullets} className={styles.navItem} alt="bulets" />
      </div>
      {modalOpen && <Backdrop show={true} onClick={modalCloseHandler} />}
    </>
  );
}
