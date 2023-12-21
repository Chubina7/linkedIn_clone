import React from "react";
import styles from "./UserMayKnow.module.css";
import UserPic from "@/components/user/userPic/UserPic";
import Link from "next/link";
// Photo source import
import FollowBtn from "@/components/buttons/followBtn/FollowBtn";

export default function UserMayKnow({
  userId,
  userName,
  userLastName,
  userEmail,
  userImage,
  userUsername,
  userWorkPlaceName,
  userWorkPlaceDepartment,
  userWorkPlaceTitle,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.border}>
        <div className={styles.bg}>
          <Link href={`/${userId}`}>
            <div className={styles.floatContainer}>
              <UserPic width={72} height={72} src={userImage} />
            </div>
          </Link>
        </div>
        <div className={styles.textContent}>
          <Link href={`/${userId}`}>
            <p className={styles.userName}>
              {userName} {userLastName}
            </p>
          </Link>
          <p className={styles.userWorkTitle}>
            {userWorkPlaceTitle} at "{userWorkPlaceName}"
          </p>
          <Link href="https://mail.google.com/" target={"_blank"}>
            <p className={styles.userContact}>{userEmail}</p>
          </Link>
        </div>
        <FollowBtn title="Follow" />
      </div>
    </div>
  );
}
