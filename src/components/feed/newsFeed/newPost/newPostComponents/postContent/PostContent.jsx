import React from "react";
import styles from "./PostContent.module.css";
import Image from "next/image";

export default function PostContent({ postContent }) {
  return (
    <div className={styles.postContent}>
      <Image
        src={postContent}
        alt="content"
        className={styles.content}
        width={500}
        height={500}
      />
    </div>
  );
}
