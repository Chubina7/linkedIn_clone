import React from "react";
import styles from "./NewPost.module.css";
import PostAuthorBar from "./newPostComponents/postAuthorBar/PostAuthorBar";
import PostDescription from "./newPostComponents/postDescription/PostDescription";
import PostContent from "./newPostComponents/postContent/PostContent";
import PostEngagement from "./newPostComponents/postEngagement/PostEngagement";
import PostInteraction from "./newPostComponents/postInteraction/postInteraction";
import ComponentBg from "@/components/componentBg/componentBg";

export default function NewPost({
  userFirstName,
  userLastName,
  userEmail,
  userImg,
  postContent
}) {
  return (
    <ComponentBg>
      <PostAuthorBar
        userFirstName={userFirstName}
        userLastName={userLastName}
        userEmail={userEmail}
        userImg={userImg}
      />
      <PostDescription />
      <PostContent postContent={postContent} />
      <PostEngagement />
      <PostInteraction />
    </ComponentBg>
  );
}
