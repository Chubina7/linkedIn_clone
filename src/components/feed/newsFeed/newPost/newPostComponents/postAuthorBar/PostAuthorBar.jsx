import React from "react";
import styles from "./PostAuthorBar.module.css";
import UserPic from "@/components/userPic/UserPic";
import Image from "next/image";
// Photo source import
import PublicIcon from "/public/svg/public.svg";
import { useSession } from "next-auth/react";
import DeletePost from "./deletePost/DeletePost";

export default function PostAuthorBar({
  authorName,
  authorWorkPlace,
  authorWorkTitle,
  authorProfileImage,
  postUploadDate,
}) {
  const session = useSession();
  return (
    <div className={styles.postAuthorBar}>
      <div className={styles.leftContainer}>
        <UserPic width={48} height={48} src={authorProfileImage} />
        <div className={styles.textContent}>
          <p className={styles.postAuthorName}>{authorName}</p>
          <p className={styles.postAuthorFollowers}>
            {authorWorkTitle} at {authorWorkPlace}
          </p>
          <div className={styles.postDetailsContainer}>
            <p className={styles.postUploadDate}>
              {postUploadDate.split("T")[0]},{" "}
              {postUploadDate
                .split("T")[1]
                .split(".")[0]
                .split(":")
                .splice(0, 2)
                .join(":")}
            </p>
            <Image
              src={PublicIcon}
              alt="Post Privacy"
              className={styles.postPrivacy}
            />
          </div>
        </div>
      </div>
      {session.data?.user?.name == authorName && <DeletePost />}
    </div>
  );
}
