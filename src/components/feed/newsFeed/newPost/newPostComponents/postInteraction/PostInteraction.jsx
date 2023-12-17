import React from "react";
import styles from "./PostInteraction.module.css";
import Button from "@/components/button/Button";
// Photo source import
import LikeIcon from "/public/svg/like.svg";
import CommentIcon from "/public/svg/comment.svg";
import RepostIcon from "/public/svg/share.svg";
import SendIcon from "/public/svg/send.svg";

export default function PostInteraction() {
  return (
    <div className={styles.wrapper}>
      <Button title="Like" src={LikeIcon} alt="like button" />
      <Button title="Comment" src={CommentIcon} alt="comment button" />
      <Button title="Repost" src={RepostIcon} alt="repost button" />
      <Button title="Send" src={SendIcon} alt="Send button" />
    </div>
  );
}
