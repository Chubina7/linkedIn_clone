import React from "react";
import styles from "./CreatePost.module.css";
import Image from "next/image";

export default function CreatePost() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.top}>
        <Image src={""} alt="profile pic" className={styles.profilePic} />
        <input type="text" className={styles.postInput} />
      </div>
      <div className={styles.postSuggestionsContainer}>
        <div className={styles.postSuggestion}>
          <Image
            src={""}
            alt="media icon"
            className={styles.postSuggestionIcon}
          />
          <p>Media</p>
        </div>
        <div className={styles.postSuggestion}>
          <Image
            src={""}
            alt="event icon"
            className={styles.postSuggestionIcon}
          />
          <p>Event</p>
        </div>
        <div className={styles.postSuggestion}>
          <Image
            src={""}
            alt="Write article icon"
            className={styles.postSuggestionIcon}
          />
          <p>Write Article</p>
        </div>
      </div>
    </section>
  );
}
