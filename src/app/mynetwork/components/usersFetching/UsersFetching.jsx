import React from "react";
import styles from "./UsersFetching.module.css";
import ComponentBg from "@/components/componentBg/ComponentBg";
import Button from "@/components/button/Button";
import UserMayKnow from "../userMayKnow/UserMayKnow";
// Photo source import
import SeeMoreIcon from "/public/svg/arrowToRight.svg";

export default function UsersFetching() {
  return (
    <div className={styles.mainWrapper}>
      <ComponentBg>
        <div className={styles.wrapper}>
          <p>No pending invitations</p>
          <div className={styles.container}>
            <p className={styles.text}>Manage</p>
          </div>
        </div>
      </ComponentBg>
      <ComponentBg>
        <div className={styles.upperContainer}>
          <p>People who are in Georgia also follow these people</p>
          <Button title="See all" alt="see all" src={SeeMoreIcon} />
        </div>
        {/* აქ დაიfetchება იუზერები */}
        <div className={styles.fetchedDataWrapper}>
          <UserMayKnow />
          <UserMayKnow />
          <UserMayKnow />
          <UserMayKnow />
          <UserMayKnow />
          <UserMayKnow />
          <UserMayKnow />
          <UserMayKnow />
          <UserMayKnow />
          <UserMayKnow />
          <UserMayKnow />
          <UserMayKnow />
        </div>
        {/*  */}
      </ComponentBg>
    </div>
  );
}
