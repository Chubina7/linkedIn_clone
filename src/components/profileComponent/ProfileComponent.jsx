"use client";

import React, { useState } from "react";
import styles from "./ProfileComponent.module.css";
import DiscoverMore from "./childComponents/discoverMore/DiscoverMore";
import Profile from "./childComponents/profile/Profile";
import ShowMoreBar from "./childComponents/showMoreBar/ShowMoreBar";

export default function ProfileComponent() {
  const [moreShown, setMoreShown] = useState(false);

  return (
    <aside className={styles.wrapper}>
      <Profile moreShown={moreShown} setMoreShown={setMoreShown} />
      {moreShown && <DiscoverMore />}
      <ShowMoreBar moreShown={moreShown} setMoreShown={setMoreShown} />
    </aside>
  );
}
