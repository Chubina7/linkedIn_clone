import React from "react";
import styles from "./PostEngagement.module.css";
import Image from "next/image";
// photo source import
import HeartEmoji from "/public/svg/colorfulHeart.svg";
import LikeEmoji from "/public/svg/colorfulLike.svg";
import LampEmoji from "/public/svg/colorfulInteraction.svg";

export default function PostEngagement({ postLikes, postComments }) {
  return (
    <div className={styles.postEngagement}>
      <div className={styles.reactions}>
        <Image src={LikeEmoji} alt="Emoji" className={styles.reaction} />
        <Image src={HeartEmoji} alt="Emoji" className={styles.reaction} />
        <Image src={LampEmoji} alt="Emoji" className={styles.reaction} />
        <p className={styles.numberOfReactions}>{postLikes}</p>
      </div>
      <div className={styles.repostsAndComments}>
        <p className={styles.commentsNumber}>{postComments} comments</p>
        <p className={styles.repostsNumber}>10 reposts</p>
      </div>
    </div>
  );
}
