import { FunctionComponent } from "react";
import styles from "./Header1.module.css";

export type Header1Type = {
  className?: string;
};

const Header1: FunctionComponent<Header1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.logo}>
          <img
            className={styles.scrappyLogo1}
            loading="lazy"
            alt=""
            src="/scrappy-logo-1@2x.png"
          />
          <div className={styles.navigation}>
            <div className={styles.whyUs}>
              <a className={styles.home}>Home</a>
              <a className={styles.whyUs1}>{`Why Us ? `}</a>
            </div>
          </div>
          <div className={styles.scrapRates}>
            <a className={styles.scrapRates1}>Scrap Rates</a>
          </div>
        </div>
        <div className={styles.pickup}>
          <div className={styles.scheduleAPickup}>
            <div className={styles.scheduleAPickupChild} />
            <a className={styles.scheduleAPickup1}>SCHEDULE A PICKUP</a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header1;
