import React from "react";
import styles from "./NewPost.module.css";
import PostAuthorBar from "./newPostComponents/postAuthorBar/PostAuthorBar";
import PostDescription from "./newPostComponents/postDescription/PostDescription";
import PostContent from "./newPostComponents/postContent/PostContent";
import PostEngagement from "./newPostComponents/postEngagement/PostEngagement";
import PostInteraction from "./newPostComponents/postInteraction/postInteraction";

export default function NewPost({
  authorName,
  authorWorkPlace,
  authorWorkTitle,
  authorProfileImage,
  postDescription,
  postContent,
  postUploadDate,
  postLikes,
  postComments,
}) {
  return (
    <div className={styles.wrapper}>
      <PostAuthorBar
        authorName={authorName}
        authorWorkPlace={authorWorkPlace}
        authorWorkTitle={authorWorkTitle}
        authorProfileImage={authorProfileImage}
        postUploadDate={postUploadDate}
      />
      <PostDescription postDescription={postDescription} />
      {postContent == null ? <></> : <PostContent postContent={postContent} />}
      <PostEngagement postLikes={postLikes} postComments={postComments} />
      <PostInteraction />
    </div>
  );
}
