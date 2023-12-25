"use client";

import React, { useState } from "react";
import styles from "./FunctionalBtn.module.css";
import CreatePostModal from "../createPostModal/CreatePostModal";

export default function FunctionalBtn() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button className={styles.postInput} onClick={openModalHandler}>
        Start a post
      </button>
      {modalOpen && <CreatePostModal onClick={openModalHandler} />}
    </>
  );
}
