import { FunctionComponent } from "react";
import styles from "./HouseholdBusinessNeeds.module.css";

export type HouseholdBusinessNeedsType = {
  className?: string;
};

const HouseholdBusinessNeeds: FunctionComponent<HouseholdBusinessNeedsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.householdBusinessNeeds, className].join(" ")}>
      <div className={styles.householdContentWrapper}>
        <div className={styles.householdContent}>
          <div className={styles.forHouseholdsWrapper}>
            <h3 className={styles.forHouseholds}>For Households</h3>
          </div>
          <div className={styles.householdBenefits}>
            <div className={styles.householdBenefitIcons}>
              <img
                className={styles.xcheckS1k62cb8i1Icon}
                loading="lazy"
                alt=""
                src="/99xcheck-s1k62cb8i-1.svg"
              />
              <img
                className={styles.xcheckS1k62cb8i1Icon}
                loading="lazy"
                alt=""
                src="/99xcheck-s1k62cb8i-1.svg"
              />
              <img
                className={styles.xcheckS1k62cb8i1Icon}
                loading="lazy"
                alt=""
                src="/99xcheck-s1k62cb8i-1.svg"
              />
            </div>
            <div className={styles.onDemandDoorstepPickupsParent}>
              <h3 className={styles.onDemandDoorstepPickups}>
                On-Demand Doorstep Pickups
              </h3>
              <h3 className={styles.accurateDigitalWeighing}>
                Accurate Digital Weighing
              </h3>
              <h3
                className={styles.safetyTrained}
              >{`Safety (Trained & Verified Staff)`}</h3>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.homeIllust1Vqbxsy5za1Icon}
        loading="lazy"
        alt=""
        src="/home-illust-1-vqbxsy5za-1@2x.png"
      />
    </div>
  );
};

export default HouseholdBusinessNeeds;
