import React from "react";
import styles from "./ManageCont.module.css";
import Footer from "@/components/footer/Footer";
import Option from "./option/Option";
// Photo source import
import Conntections from "/public/svg/connections.svg"
import FollowingFollowers from "/public/svg/followingFollowers.svg"
import Groups from "/public/svg/network.svg"
import Events from "/public/svg/calendar.svg"
import Pages from "/public/svg/pages.svg"
import Newsletters from "/public/svg/letters.svg"
import Hashtags from "/public/svg/hashTag.svg"
import Image from "next/image";
import ArrowUp from "/public/svg/arrow-up.svg"

export default function ManageCont() {
  return (
    <section className={styles.wrapper}>
      <Footer>
        <p className={styles.heading}>Manage my network</p>
        <Option src={Conntections} alt={"alt"} title="Conntections" numberOfNoti={3} />
        <Option src={FollowingFollowers} alt={"alt"} title="Following & Followers" numberOfNoti={""} />
        <Option src={Groups} alt={"alt"} title="Groups" numberOfNoti={2} />
        <Option src={Events} alt={"alt"} title="Events" numberOfNoti={""} />
        <Option src={Pages} alt={"alt"} title="Pages" numberOfNoti={""} />
        <Option src={Newsletters} alt={"alt"} title="Newsletters" numberOfNoti={2} />
        <Option src={Hashtags} alt={"alt"} title="Hashtags" numberOfNoti={6} />
        <div className={styles.paddingCont}>
        <div className={styles.container}>
          <p className={styles.text}>Show less</p>
          <Image src={ArrowUp} alt="arrowUp" className={styles.arrowIcon} />
        </div>
        </div>
      </Footer>
    </section>
  );
}
