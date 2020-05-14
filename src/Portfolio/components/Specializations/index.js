import React from "react";
import {
  FaFileAlt,
  FaDesktop,
  FaObjectUngroup,
  FaThumbsUp,
  FaUsers,
  FaAward,
  FaHourglass,
  FaCode,
} from "react-icons/fa";

import Specialization from "../../components/Specialization";

import styles from "./index.module.scss";
import Stat from "../Stat";
import CreativeItem from "../CreativeItem";

export default () => {
  return (
    <section id={styles.specialize}>
      <div className={styles.container}>
        <h1 className={styles.heading}>I Specialize In</h1>
        <div className={styles.bottomLine}></div>
        <p>
          Photography as well as creating digital masterpieces and UI/UX layouts
          for websites and mobile applications
        </p>
        <div>
          <Specialization Icon={FaFileAlt} title="CONCEPTING" />
          <Specialization Icon={FaDesktop} title="UX/UI" />
          <Specialization Icon={FaObjectUngroup} title="VISUAL DESIGN" />
          <Specialization Icon={FaThumbsUp} title="INTERACTION" />
        </div>
      </div>
      <div>
        <Stat Icon={FaUsers} title={"Clients"} number={15} />
        <Stat Icon={FaAward} title={"Awards"} number={20} />
        <Stat Icon={FaHourglass} title={"Hours Worked"} number={4200} />
        <Stat Icon={FaCode} title="Projects" number={87} />
      </div>
      
      <div className={styles.container}>
        <h1 className={styles.heading}>MY CREATIVE PROCESS</h1>
        <div className={styles.bottomLine}></div>
        <p>
          Photography as well as creating digital masterpieces and UI/UX layouts
          for websites and mobile applications
        </p>
        <div>
          <CreativeItem Icon={FaFileAlt} title="CONCEPTING" number={1} />
          <CreativeItem Icon={FaDesktop} title="UX/UI" number={2} />
          <CreativeItem
            Icon={FaObjectUngroup}
            title="VISUAL DESIGN"
            number={3}
          />
          <CreativeItem Icon={FaThumbsUp} title="INTERACTION" number={4} />
        </div>
      </div>
    </section>
  );
}
