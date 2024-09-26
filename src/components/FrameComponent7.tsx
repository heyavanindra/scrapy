import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.whyUsWrapper}>
        <h2 className={styles.whyUs}>Why Us?</h2>
      </div>
      <div className={styles.whyUsBenefits}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.benefitOneContent}>
            <img
              className={styles.rupye1Icon}
              loading="lazy"
              alt=""
              src="/rupye-1@2x.png"
            />
          </div>
          <div className={styles.benefitTwoContentParent}>
            <div className={styles.benefitTwoContent}>
              <b className={styles.bestRates}>Best Rates</b>
            </div>
            <div className={styles.weProvideThe}>
              We provide the best value for your scrap from our network of
              Recyclers.
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameItem} />
          <div className={styles.tick1Wrapper}>
            <img
              className={styles.rupye1Icon}
              loading="lazy"
              alt=""
              src="/tick-1@2x.png"
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.convenienceWrapper}>
              <b className={styles.convenience}>Convenience</b>
            </div>
            <div
              className={styles.weProvideThe}
            >{`Doorstep pickup according to user's convenient date & time.`}</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.trustWrapper}>
            <b className={styles.convenience}>Trust</b>
          </div>
          <div className={styles.triangle1Parent}>
            <img
              className={styles.triangle1Icon}
              loading="lazy"
              alt=""
              src="/triangle-1@2x.png"
            />
            <div className={styles.trainedVerifiedPickupStafWrapper}>
              <div
                className={styles.trainedVerified}
              >{`Trained & Verified Pickup Staff with Swapeco Smart Weighing Scale`}</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameItem} />
          <div className={styles.leaf1Wrapper}>
            <img
              className={styles.rupye1Icon}
              loading="lazy"
              alt=""
              src="/leaf-1@2x.png"
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.ecoFriendlyWrapper}>
              <b className={styles.ecoFriendly}>Eco-friendly</b>
            </div>
            <div className={styles.weEnsureResponsible}>
              We ensure responsible recycling of your scrap items.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
