import React from "react";
import styles from "./PostDescription.module.css";

export default function PostDescription() {
  return (
    <div className={styles.postDescription}>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi
        enim ullam soluta perspiciatis quidem, optio quos ex numquam laudantium
        nesciunt iste minima debitis doloribus eius ducimus blanditiis aliquam
        impedit quam consequuntur animi nemo vitae. Provident nihil beatae sunt
        aspernatur sint iusto, adipisci mollitia, aliquam exercitationem quod,
        repellendus odit saepe?
      </p>
    </div>
  );
}
