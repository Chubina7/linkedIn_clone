"use client";

import React, { useState } from "react";
import styles from "./Feed.module.css";
import CreatePost from "./createPost/CreatePost";
import NewsFeed from "./newsFeed/NewsFeed";

export default function Feed() {
  const [newPostsList, setNewPostsList] = useState([]);

  return (
    <div className={styles.wrapper}>
      <CreatePost setNewPostsList={setNewPostsList} />
      <NewsFeed newPostsList={newPostsList} />
    </div>
  );
}
