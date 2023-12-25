import React from "react";
import styles from "./PostDescription.module.css";

export default function PostDescription({ postDescription }) {
  return (
    <div className={styles.postDescription}>
      <p className={styles.description}>{postDescription}</p>
    </div>
  );
}
