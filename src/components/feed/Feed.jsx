import React from "react";
import styles from "./Feed.module.css";
import CreatePost from "./createPost/CreatePost";
import NewsFeed from "./newsFeed/NewsFeed";

export default function Feed() {
  return (
    <div className={styles.wrapper}>
      <CreatePost />
      <NewsFeed />
    </div>
  );
}
