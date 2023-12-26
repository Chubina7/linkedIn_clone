"use client";

import React, { useEffect, useState } from "react";
import styles from "./NewsFeed.module.css";
import NewPost from "./newPost/NewPost";
import Loading from "@/components/loading/Loading";

// const getData = async () => {
//   const response = await fetch("http://localhost:3000/api/posts");
//   const result = await response.json();
//   if (!response.ok) {
//     throw new Error("Error occuired");
//   }
//   return result;
// };

export default function NewsFeed() {
  const [data, setData] = useState(null);
  // const data = await getData();
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000/api/posts", {
        next: { revalidate: true },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Error occuired");
      }
      setData(data);
    };
    getData();
  }, [data]);

  return (
    <section className={styles.wrapper}>
      {data ? (
        <>
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
        </>
      ) : (
        <p>wait...</p>
      )}
    </section>
  );
}
