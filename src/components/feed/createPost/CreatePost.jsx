import React from "react";
import styles from "./CreatePost.module.css";
import Image from "next/image";
import UserPic from "@/components/user/userPic/UserPic";
// Photo source import
import MediaIcon from "/public/svg/notes.svg";
import EventIcon from "/public/svg/calendar.svg";
import WriteArticleIcon from "/public/svg/write.svg";
import Button from "@/components/button/Button";

export default function CreatePost() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.top}>
        <UserPic width={48} height={48} />
        <button className={styles.postInput}>Start a post</button>
      </div>
      <div className={styles.postSuggestionsContainer}>
        <Button title="Media" src={MediaIcon} alt={"media icon"} />
        <Button title="Event" src={EventIcon} alt={"event icon"} />
        <Button
          title="Write Article"
          src={WriteArticleIcon}
          alt={"event icon"}
        />
      </div>
    </section>
  );
}
