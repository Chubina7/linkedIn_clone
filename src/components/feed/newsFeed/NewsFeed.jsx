import React, { useEffect, useState } from "react";
import styles from "./NewsFeed.module.css";
import NewPost from "./newPost/NewPost";

export default function NewsFeed({ newPostsList }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000/api/posts");
      const result = await response.json();
      if (!response.ok) {
        throw new Error("Error occuired");
      }
      setData(result);
      setLoading(false);
    };
    getData();
  }, [newPostsList]);

  return (
    <section className={styles.wrapper}>
      {loading ? (
        <p>Fetching...</p>
      ) : (
        data
          .slice()
          .reverse()
          .map((item) => {
            return (
              <NewPost
                authorName={item.authorName}
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
          })
      )}
    </section>
  );
}
