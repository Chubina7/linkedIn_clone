"use client";

import React, { useContext, useState } from "react";
import styles from "./Profile.module.css";
import Image from "next/image";
import { LoginContext } from "@/context/LoginContext";
import UserPic from "@/components/userPic/UserPic";
import ComponentBg from "@/components/componentBg/ComponentBg";
import FollowBtn from "@/components/buttons/followBtn/FollowBtn";
import Button from "@/components/buttons/button/Button";
// Photo source import
import ArrowDown from "/public/svg/downArrow.svg";
import LoginImage from "/public/svg/arrowToRight.svg";
import DefaultImg from "/public/png/defaultImg.png";

export default function Profile() {
  const { userLogined } = useContext(LoginContext);
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpenHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div className={styles.profile} onClick={modalOpenHandler}>
        <UserPic width={24} height={24} src={DefaultImg} />
        <div className={styles.title}>
          <p className={styles.text}>Me</p>
          <Image src={ArrowDown} alt="arrow down" />
        </div>
      </div>
      {modalOpen && (
        <div className={styles.modal}>
          <ComponentBg>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "8px",
              }}
            >
              {userLogined ? (
                <FollowBtn title="View Profile" />
              ) : (
                <Button title="Login / Sign Up" src={LoginImage} />
              )}
            </div>
          </ComponentBg>
        </div>
      )}
    </div>
  );
}
