"use client";

import React, { useContext } from "react";
import styles from "./PostInteraction.module.css";
import Button from "@/components/buttons/button/Button";
// Photo source import
import LikeIcon from "/public/svg/like.svg";
import CommentIcon from "/public/svg/comment.svg";
import RepostIcon from "/public/svg/share.svg";
import SendIcon from "/public/svg/send.svg";
import { LoginContext } from "@/context/LoginContext";

export default function PostInteraction() {
  const { userLogined } = useContext(LoginContext);

  const likeHandler = () => {
    if(userLogined == false) {
      alert("You can not interact without login")
    }
  };
  const commentHandler = () => {
    if(userLogined == false) {
      alert("You can not interact without login")
    }
  };
  const repostHandler = () => {
    if(userLogined == false) {
      alert("You can not interact without login")
    }
  };
  
  return (
    <div className={styles.wrapper}>
      <Button
        title="Like"
        src={LikeIcon}
        alt="like button"
        onClick={likeHandler}
      />
      <Button
        title="Comment"
        src={CommentIcon}
        alt="comment button"
        onClick={commentHandler}
      />
      <Button
        title="Repost"
        src={RepostIcon}
        alt="repost button"
        onClick={repostHandler}
      />
    </div>
  );
}
