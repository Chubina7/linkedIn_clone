import React from "react";
import styles from "./UserPic.module.css";
import Image from "next/image";
// Photo source import
import ProfilePic from "/public/jpg/profile.jpg";

export default function UserPic(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "50px",
        textAlign: "center",
      }}
    >
      <Image
        src={props.src}
        alt="profile pic"
        width={props.width}
        height={props.height}
        className={styles.profilePic}
      />
    </div>
  );
}
