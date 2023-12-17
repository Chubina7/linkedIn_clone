import React from "react";
import styles from "./PostEngagement.module.css";
import Image from "next/image";

export default function PostEngagement() {
  return (
    <div className={styles.postEngagement}>
      <div className={styles.reactions}>
        <Image src={""} alt="Emoji" className={styles.reaction} />
        <Image src={""} alt="Emoji" className={styles.reaction} />
        <Image src={""} alt="Emoji" className={styles.reaction} />
        <p className={styles.numberOfReactions}>12</p>
      </div>
      <div className={styles.repostsAndComments}>
        <p className={styles.commentsNumber}>10 comments</p>
        <p className={styles.repostsNumber}>10 reposts</p>
      </div>
    </div>
  );
}
