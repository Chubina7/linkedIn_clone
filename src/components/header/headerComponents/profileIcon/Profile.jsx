"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Profile.module.css";
import Image from "next/image";
import { LoginContext } from "@/context/LoginContext";
import UserPic from "@/components/userPic/UserPic";
import BgComponent from "@/components/background/BgComponent";
import FollowBtn from "@/components/buttons/followBtn/FollowBtn";
import Button from "@/components/buttons/button/Button";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
// Photo source import
import ArrowDown from "/public/svg/downArrow.svg";
import LoginImage from "/public/svg/arrowToRight.svg";

export default function Profile() {
  const router = useRouter();
  const { userLogined, userImage, userName } = useContext(LoginContext);
  const modalRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpenHandler = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const outsideClickHandler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };
    if (modalOpen) {
      document.addEventListener("mousedown", outsideClickHandler);
    } else {
      document.removeEventListener("mousedown", outsideClickHandler);
    }
  }, [modalOpen]);

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div className={styles.profile} onClick={modalOpenHandler}>
        <UserPic width={24} height={24} src={userImage} />
        <div className={styles.title}>
          <p className={styles.text}>Me</p>
          <Image src={ArrowDown} alt="arrow down" />
        </div>
      </div>
      {modalOpen && (
        <>
          <div className={styles.modal} ref={modalRef}>
            <BgComponent>
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
                  <>
                    <Link href={`/loginedUser/${userName}`}>
                      <FollowBtn title="View Profile" />
                    </Link>
                    <p
                      style={{
                        fontSize: "14px",
                        opacity: "60%",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        signOut();
                        router.push("/login");
                      }}
                    >
                      Log Out
                    </p>
                  </>
                ) : (
                  <Link href={"/login"}>
                    <Button title="Login / Sign Up" src={LoginImage} />
                  </Link>
                )}
              </div>
            </BgComponent>
          </div>
        </>
      )}
    </div>
  );
}
