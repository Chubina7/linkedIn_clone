import React from "react";
import styles from "./Profile.module.css";
import Image from "next/image";
import UserPic from "@/components/userPic/UserPic";
import BgComponent from "@/components/background/BgComponent";
// Photo source import
import AddFriendIcon from "/public/svg/addFriend.svg";
import BookmarkIcon from "/public/svg/bookmark.svg";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Profile({ moreIsShown, src, name }) {
  const session = useSession();

  return (
    <BgComponent>
      <div className={styles.backgroundImg}></div>
      <div className={styles.identifierContainer}>
        <Link href={`/loginedUser/${session.data?.user?.name}`}>
          <div className={styles.identifier}>
            <UserPic height={72} width={72} src={src} />
            <p className={styles.userName}>{name}</p>
          </div>
        </Link>
        <p className={styles.userDescription}>- -</p>
      </div>

      {moreIsShown && (
        <>
          <div className={styles.hoverContainer}>
            <div className={styles.connectionContainer}>
              <div className={styles.textContent}>
                <p className={styles.text}>Connections</p>
                <p className={styles.boldText}>Grow your network</p>
              </div>
              <Image
                src={AddFriendIcon}
                alt="add friend icon"
                className={styles.addFriendIcon}
              />
            </div>
          </div>
          <div className={styles.achieveContainer}>
            <p className={styles.text}>Achieve your career goals</p>
            <p className={styles.boldText}>Try premium for $0</p>
          </div>
          <div className={styles.bookmarkContainer}>
            <Image
              src={BookmarkIcon}
              alt="bookmark icon"
              className={styles.bookmarkIcon}
            />
            <p className={styles.boldText}>My items</p>
          </div>
        </>
      )}
    </BgComponent>
  );
}
