import { FunctionComponent } from "react";
import styles from "./Content1.module.css";

export type Content1Type = {
  className?: string;
};

const Content1: FunctionComponent<Content1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.pricing}>
        <div className={styles.fluctuatingPrices}>
          <div className={styles.fluctuatingPricesChild} />
          <div className={styles.notes}>Notes</div>
          <div className={styles.thePricesMayVaryWithFluctWrapper}>
            <div className={styles.thePricesMayContainer}>
              <ul className={styles.thePricesMayVaryWithFluct}>
                <li>
                  The prices may vary with fluctuation in the scrap market.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.thePricesMayVaryWithFluctWrapper}>
            <div className={styles.thePricesMayContainer}>
              <ul className={styles.pricesMayBeDifferentForBu}>
                <li>
                  <span>
                    Prices may be different for bulk pickups. Call us at +91-
                  </span>
                  <i className={styles.i}>{`7068065306 `}</i>
                  <span className={styles.i}>
                    to get a quote for bulk pickup.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.recyclables}>
          <h1 className={styles.normalRecyclables}>Normal Recyclables</h1>
        </div>
      </div>
    </div>
  );
};

export default Content1;
