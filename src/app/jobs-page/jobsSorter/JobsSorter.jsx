import React from "react";
import styles from "./JobsSorter.module.css";
import ComponentBg from "@/components/componentBg/ComponentBg";
import Option from "@/app/mynetwork/components/manageCont/option/Option";

export default function JobsSorter() {
  return (
    <ComponentBg>
      <div className={styles.wrapper}>
        <Option title="My Jobs" src={""} alt="" />
        <Option title="Preferences" src={""} alt="" />
        <Option title="Demonstrate Skills" src={""} alt="" />
        <Option title="Interview Skills" src={""} alt="" />
        <Option title="Resume Builder" src={""} alt="" />
        <Option title="Job Seeker Guidence" src={""} alt="" />
        <Option title="Application Settings" src={""} alt="" />
      </div>
    </ComponentBg>
  );
}
