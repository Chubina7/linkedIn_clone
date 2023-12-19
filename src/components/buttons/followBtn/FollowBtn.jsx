import React from "react";
import styles from "./FollowBtn.module.css";

export default function FollowBtn(props) {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.followButton}>{props.title}</button>
    </div>
  );
}
