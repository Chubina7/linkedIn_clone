import React from "react";
import styles from "./NewsFeed.module.css";
import NewPost from "./newPost/NewPost";

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/posts");
  const result = await response.json();
  if (!response.ok) {
    throw new Error("Error occuired");
  }
  return result;
};

export default async function NewsFeed() {
  const data = await getData();

  return (
    <section className={styles.wrapper}>
      {data.map((item) => {
        return (
          <NewPost
            authorName={item.authorName}
            authorSurename={item.authorSurename}
            authorWorkPlace={item.authorWorkPlace}
            authorWorkTitle={item.authorWorkTitle}
            authorProfileImage={item.authorProfileImage}
            postUploadDate={item.createdAt}
            postDescription={item.postDescription}
            postContent={item.postContent}
            postLikes={item.postLikes}
            postComments={item.postComments}
          />
        );
      })}
    </section>
  );
}
