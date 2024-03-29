import React from "react";
import styles from "./UsersFetching.module.css";
import UserMayKnow from "../userMayKnow/UserMayKnow";

const getData = async () => {
  const randomId = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
  const res = await fetch(
    `https://dummyjson.com/users?limit=15&skip=${randomId}&select=firstName,lastName,email,image,username,company`
  );
  const result = await res.json();
  const data = await result.users;
  if (!res.ok) {
    throw new Error("404");
  }
  return data;
};

export default async function UsersFetching() {
  const users = await getData();
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.componentWrapper}>
        <div className={styles.wrapper}>
          <p>No pending invitations</p>
        </div>
      </div>
      <div className={styles.componentWrapper}>
        <div className={styles.upperContainer}>
          <p>People who are in Georgia also follow these people</p>
        </div>
        <div className={styles.fetchedDataWrapper}>
          {users.map((item, index) => {
            return (
              <UserMayKnow
                userId={item.id}
                userName={item.firstName}
                userLastName={item.lastName}
                userEmail={item.email}
                userImage={item.image}
                userUsername={item.username}
                userWorkPlaceName={item.company.name}
                userWorkPlaceDepartment={item.company.department}
                userWorkPlaceTitle={item.company.title}
                key={index + item.title + item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
