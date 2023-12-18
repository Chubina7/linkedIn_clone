import React from "react";
import styles from "./NewPost.module.css";
import PostAuthorBar from "./newPostComponents/postAuthorBar/PostAuthorBar";
import PostDescription from "./newPostComponents/postDescription/PostDescription";
import PostContent from "./newPostComponents/postContent/PostContent";
import PostEngagement from "./newPostComponents/postEngagement/PostEngagement";
import PostInteraction from "./newPostComponents/postInteraction/postInteraction";
import ComponentBg from "@/components/componentBg/componentBg";

export default function NewPost() {
  return (
    <ComponentBg>
      <PostAuthorBar />
      <PostDescription />
      <PostContent />
      <PostEngagement />
      <PostInteraction />
    </ComponentBg>
  );
}
