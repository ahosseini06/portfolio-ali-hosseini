import React from "react";
import styles from "./Ordr.module.css";
import phone from "./assets/iPhoneHL_PlaySync.svg";
import laptop from "./assets/macBookHL_PlaySync.svg";
import waiter from "./assets/ORDR_Waiter.svg";
import kitchen from "./assets/ORDR_Kitchen.svg";
import manager from "./assets/ORDR_Manager.svg";

const Ordr = () => {
  //list of bulletPoints
  //bulletPoint is {heading: string, description: string}
  const bulletPoints = [
    {
      heading: "Seamless Payment and Registration",
      description:
        "Teams can register online with a streamlined process that consolidates everything from sign-ups to secure payments, eliminating paperwork and manual tracking.",
    },
  ];
  return (
    <div className={styles.page}>
      <div className={styles.t1}>
        <div className={styles.intro}>
          <h1 className={styles.title}>ORDR</h1>
          <p className={styles.introduction}>
            ORDR is a streamlined full-stack web application designed to
            automate and optimize the ordering and inventory processes.
            Initially developed for a school catering team, ORDR leverages
            modern technologies like React and Strapi to simplify workflows,
            reduce manual effort, and provide a seamless user experience from
            order placement to inventory management.
          </p>
        </div>

        <div className={styles.row}>
          <div className={styles.ingContainer}>
            <div className={styles.imgDescription}>Kitchen/Bar View</div>
            <img className={styles.img} src={kitchen} alt="iPhone" />
          </div>

          <p className={styles.description}>
            The Kitchen View offers a streamlined dashboard for managing orders
            and inventory. It displays upcoming orders, stock levels, and
            alerts, helping the kitchen staff stay on top of tasks and low-stock
            items. Its user-friendly design ensures smooth workflows and
            efficient operations.
          </p>
        </div>

        {
          // render waiter view only if the screen is wider than 768px
          window.innerWidth > 768 ? (
            <div className={styles.row}>
              <p className={styles.description}>
                The Waiter View allows waiters to track active and pending
                orders, update statuses, and make real-time changes. The clean
                interface helps waiters serve customers efficiently, while
                maintaining seamless communication with the kitchen.
              </p>

              <div className={styles.ingContainer}>
                <div className={styles.imgDescription}>Waiter View</div>
                <img className={styles.img} src={waiter} alt="MacBook" />
              </div>
            </div>
          ) : (
            <div className={styles.row}>
              <div className={styles.ingContainer}>
                <div className={styles.imgDescription}>Waiter View</div>
                <img className={styles.img} src={waiter} alt="MacBook" />
              </div>

              <p className={styles.description}>
                The Waiter View allows waiters to track active and pending
                orders, update statuses, and make real-time changes. The clean
                interface helps waiters serve customers efficiently, while
                maintaining seamless communication with the kitchen.
              </p>
            </div>
          )
        }

        <div className={styles.row}>
          <div className={styles.ingContainer}>
            <div className={styles.imgDescription}>Manager View</div>
            <img className={styles.img} src={manager} alt="MacBook" />
          </div>

          <p className={styles.description}>
            The Manager View provides a comprehensive overview of restaurant
            operations, including sales and order tracking. It helps managers
            monitor performance, generate reports, and set thresholds, ensuring
            smooth oversight of the entire workflow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ordr;
