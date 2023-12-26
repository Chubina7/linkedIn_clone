"use client";
import React, { useContext } from "react";
import styles from "./CreatePost.module.css";
import UserPic from "@/components/userPic/UserPic";
import Button from "@/components/buttons/button/Button";
import ComponentBg from "@/components/componentBg/componentBg";
import FunctionalBtn from "./functionalBtn/FunctionalBtn";
import { LoginContext } from "@/context/LoginContext";
// Photo source import
import MediaIcon from "/public/svg/imageIcon.svg";
import EventIcon from "/public/svg/calendar.svg";
import WriteArticleIcon from "/public/svg/notes.svg";

export default function CreatePost() {
  const { userLogined } = useContext(LoginContext);

  return (
    <ComponentBg>
      <div className={styles.top}>
        <UserPic width={48} height={48} src={""} />
        <FunctionalBtn /> {/* Client side component */}
      </div>
      <div className={styles.postSuggestionsContainer}>
        <Button title="Media" src={MediaIcon} alt={"media icon"} />
        <Button title="Event" src={EventIcon} alt={"event icon"} />
        <Button
          title="Write Article"
          src={WriteArticleIcon}
          alt={"article icon"}
        />
      </div>
    </ComponentBg>
  );
}
