import React from "react";
import styles from "./NewsFeed.module.css";
import NewPost from "./newPost/NewPost";

// SSR fetch
const getUsersData = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const result = await res.json();
  if (!res.ok) {
    console.log("error");
  }
  return result.users;
};
const getPostsData = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const result = await res.json();
  if (!res.ok) {
    console.log("error");
  }
  return result.posts
};

export default async function NewsFeed() {
  const usersData = await getUsersData();
  const postsData = await getPostsData()

  console.log(postsData)

  console.log(typeof usersData);
  return (
    <section className={styles.wrapper}>
      {usersData.map((item) => {
        return (
          <NewPost
            userFirstName={item.firstName}
            userLastName={item.lastName}
            userEmail={item.email}
            userImg={item.image}
          />
        );
      })}
    </section>
  );
}
