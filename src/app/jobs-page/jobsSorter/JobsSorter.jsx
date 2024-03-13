import React from "react";
import styles from "./JobsSorter.module.css";
import Option from "@/app/mynetwork/components/manageCont/option/Option";
// photo source import
import BookmarkLogo from "/public/svg/bookmark.svg";
import ListLogo from "/public/svg/listLogo.svg";
import CheckMarkLogo from "/public/svg/checkMarkLogo.svg";
import PaperLogo from "/public/svg/paperLogo.svg";
import VideoLogo from "/public/svg/videoLogo.svg";
import SettingsLogo from "/public/svg/settings.svg";

export default function JobsSorter() {
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.wrapper}>
        <Option title="My Jobs" src={BookmarkLogo} alt="bookmark logo" />
        <Option title="Preferences" src={ListLogo} alt="list logo" />
        <Option
          title="Demonstrate Skills"
          src={CheckMarkLogo}
          alt="checkmark logo"
        />
        <Option title="Interview Skills" src={PaperLogo} alt="paper logo" />
        <Option title="Job Seeker Guidence" src={VideoLogo} alt="video logo" />
        <Option
          title="Application Settings"
          src={SettingsLogo}
          alt="settings logo"
        />
      </div>
    </div>
  );
}
