import React from "react";
import styles from "./UserPic.module.css";
import Image from "next/image";
// Photo source import
import DefaultImg from "/public/png/defaultImg.png";

export default function UserPic(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "100%",
        display: "flex",
      }}
    >
      <Image
        src={props.src !== "" ? props.src : DefaultImg}
        alt="profile pic"
        width={props.width}
        height={props.height}
        className={styles.profilePic}
      />
    </div>
  );
}
