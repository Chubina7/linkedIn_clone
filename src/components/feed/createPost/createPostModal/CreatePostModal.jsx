"use client";

import React, { useContext, useState } from "react";
import styles from "./CreatePostModal.module.css";
import Backdrop from "@/components/backdrop/Backdrop";
import UserPic from "@/components/userPic/UserPic";
import Image from "next/image";
import FollowBtn from "@/components/buttons/followBtn/FollowBtn";
import { useRouter } from "next/navigation";
import { LoginContext } from "@/context/LoginContext";
// photo source import
import Xx from "/public/svg/xx.svg";

export default function CreatePostModal({ onClick }) {
  const router = useRouter();
  const { userImage, userName } = useContext(LoginContext);
  const [message, setMessage] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorSurename, setAuthorSurename] = useState("");
  const [authorWorkPlace, setAuthorWorkPlace] = useState("");
  const [authorWorkTitle, setAuthorWorkTitle] = useState("");
  const [authorProfileImage, setAuthorProfileImage] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postContent, setPostContent] = useState(null);
  const [postLikes, setPostLikes] = useState(0);
  const [postComments, setPostComments] = useState(0);

  const textAreaChangeHandler = (e) => {
    setPostDescription(e.target.value);

    setAuthorName(userName);
    setAuthorSurename(userName);
    setAuthorWorkPlace("workplace");
    setAuthorWorkTitle("worktitle");
    setAuthorProfileImage(userImage);
  };

  const requestHandler = async () => {
    try {
      if (postDescription !== "") {
        const response = await fetch("http://localhost:3000/api/posts", {
          method: "POST",
          body: JSON.stringify({
            authorName,
            authorSurename,
            authorWorkPlace,
            authorWorkTitle,
            authorProfileImage,
            postDescription,
            postContent,
            postLikes,
            postComments,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setMessage("Post has been created");
        router.reload()
      } else {
        alert("Write something first");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {message !== "Post has been created" ? (
        <>
          <div className={styles.wrapper}>
            <div className={styles.upperContainer}>
              <div className={styles.userInfoContainer}>
                <UserPic
                  width={56}
                  height={56}
                  src={userImage}
                  alt="profile pic"
                />
                <p>{userName}</p>
              </div>
              <div className={styles.xBtnContainer} onClick={onClick}>
                <Image
                  src={Xx}
                  width={18}
                  height={18}
                  style={{ opacity: "60%" }}
                />
              </div>
            </div>
            <textarea
              placeholder="What do you want to talk about"
              className={styles.textArea}
              onChange={textAreaChangeHandler}
            ></textarea>
            <div className={styles.postBtnContainer}>
              <div style={{ width: "100px" }}>
                <FollowBtn title="Post" onClick={requestHandler} />
              </div>
            </div>
          </div>
          <Backdrop show={true} zIndex={"101"} onClick={onClick} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
