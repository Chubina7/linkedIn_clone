"use client";

import React, { useState } from "react";
import styles from "./ManageCont.module.css";
import Footer from "@/components/footer/Footer";
import Option from "./option/Option";
// Photo source import
import Conntections from "/public/svg/connections.svg";
import FollowingFollowers from "/public/svg/followingFollowers.svg";
import Groups from "/public/svg/network.svg";
import Events from "/public/svg/calendar.svg";
import Pages from "/public/svg/pages.svg";
import Newsletters from "/public/svg/letters.svg";
import Hashtags from "/public/svg/hashTag.svg";
import Image from "next/image";
import ArrowUp from "/public/svg/arrow-up.svg";
import ArrowDown from "/public/svg/arrow-down.svg";

export default function ManageCont() {
  const [showMore, setShowMore] = useState(false);
  const showMoreHandler = () => {
    setShowMore(!showMore);
  };
  return (
    <section className={styles.wrapper}>
      <Footer>
        <p className={styles.heading}>Manage my network</p>
        {showMore && (
          <>
            <Option
              src={Conntections}
              alt={"alt"}
              title="Conntections"
              numberOfNoti={""}
            />
            <Option
              src={FollowingFollowers}
              alt={"alt"}
              title="Following & Followers"
              numberOfNoti={""}
            />
            <Option src={Groups} alt={"alt"} title="Groups" numberOfNoti={""} />
            <Option src={Events} alt={"alt"} title="Events" numberOfNoti={""} />
            <Option src={Pages} alt={"alt"} title="Pages" numberOfNoti={""} />
            <Option
              src={Newsletters}
              alt={"alt"}
              title="Newsletters"
              numberOfNoti={""}
            />
            <Option
              src={Hashtags}
              alt={"alt"}
              title="Hashtags"
              numberOfNoti={""}
            />
          </>
        )}
        <div className={styles.paddingCont}>
          <div className={styles.container} onClick={showMoreHandler}>
            <p className={styles.text}>Show {showMore ? "less" : "more"}</p>
            <Image
              src={showMore ? ArrowUp : ArrowDown}
              alt="arrowUp"
              className={styles.arrowIcon}
            />
          </div>
        </div>
      </Footer>
    </section>
  );
}
