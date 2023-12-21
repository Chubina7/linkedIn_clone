import React from "react";
import styles from "./NewsFeed.module.css";
import NewPost from "./newPost/NewPost";


const getData = async () => {
  const response = await fetch("https://dummyjson.com/users/5/posts");
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
      {/* {usersData.map((item) => {
        return (
          <NewPost
            userFirstName={item.firstName}
            userLastName={item.lastName}
            userEmail={item.email}
            userImg={item.image}
            postContent={item.image}
          />
        );
      })} */}
    </section>
  );
}
