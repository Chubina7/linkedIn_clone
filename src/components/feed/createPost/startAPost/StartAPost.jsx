import React, { useContext, useState } from "react";
import styles from "./StartAPost.module.css";
import CreatePostModal from "../createPostModal/CreatePostModal";
import { LoginContext } from "@/context/LoginContext";

export default function StartAPost({ setNewPostList }) {
  const { userLogined } = useContext(LoginContext);
  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => {
    if (userLogined) {
      setModalOpen(!modalOpen);
    } else {
      alert("You must login first");
    }
  };

  return (
    <>
      <button className={styles.postInput} onClick={openModalHandler}>
        Start a post
      </button>
      {modalOpen && (
        <CreatePostModal
          onClick={openModalHandler}
          setNewPostsList={setNewPostList}
        />
      )}
    </>
  );
}
