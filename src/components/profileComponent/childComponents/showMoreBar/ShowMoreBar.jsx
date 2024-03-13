import React, { useEffect } from "react";
import styles from "./ShowMoreBar.module.css";
import DowrnArrow from "/public/svg/arrow-down.svg";
import UpArrow from "/public/svg/arrow-up.svg";
import Image from "next/image";

function ShowMoreBar({ moreShown, setMoreShown }) {
  useEffect(() => {
    if (window.innerWidth > 768) {
      setMoreShown(true);
    } else {
      setMoreShown(false);
    }
  }, []);

  return (
    <div className={styles.showMoreBar}>
      <div
        className={styles.hoverContainer}
        onClick={() => setMoreShown((prev) => !prev)}
      >
        <p className={styles.text}>Show {moreShown ? "Less" : "More"}</p>
        <Image
          src={moreShown ? UpArrow : DowrnArrow}
          alt="dropDown/dropUp"
          className={styles.arrow}
        />
      </div>
    </div>
  );
}

export default ShowMoreBar;
