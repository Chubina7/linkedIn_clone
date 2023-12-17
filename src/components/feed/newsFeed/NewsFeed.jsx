import React from "react";
import styles from "./NewsFeed.module.css";
import NewPost from "./newPost/NewPost";
// Photo source import

export default function NewsFeed() {
  return (
    <section className={styles.wrapper}>
      <NewPost />
      <NewPost />
      <NewPost />
    </section>
  );
}
