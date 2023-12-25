import React from "react";
import styles from "./CreatePostModal.module.css";
import Backdrop from "@/components/backdrop/Backdrop";
import UserPic from "@/components/user/userPic/UserPic";
import Image from "next/image";
// photo source import
import Xx from "/public/svg/xx.svg";

export default function CreatePostModal({ onClick }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.upperContainer}>
          <div className={styles.userInfoContainer}>
            <UserPic width={56} height={56} />
            <p>UserName UserSurename</p>
          </div>
          <div className={styles.xBtnContainer} onClick={onClick}>
            <Image src={Xx} width={18} height={18} style={{ opacity: "60%" }} />
          </div>
        </div>
        <textarea
          placeholder="What do you want to talk about"
          className={styles.textArea}
        ></textarea>
        <div className={styles.postBtnContainer}>
          <button onClick={onClick}>Post</button>
        </div>
      </div>
      <Backdrop show={true} zIndex={"101"} onClick={onClick} />
    </>
  );
}