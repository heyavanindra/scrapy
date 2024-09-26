import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.howItWorksContentWrapper, className].join(" ")}>
      <div className={styles.howItWorksContent}>
        <div className={styles.howItWorksWrapper}>
          <h2 className={styles.howItWorks}>How it works</h2>
        </div>
        <div className={styles.howItWorksSteps}>
          <FrameComponent
            scheduleAPickup="Schedule a Pickup"
            cALENDER1="/calender-1@2x.png"
          />
          <FrameComponent
            propGap="29px"
            scheduleAPickup="Pickup at your address"
            cALENDER1="/undraw-street-food-re-uwex-1-thcc3aujgjy-1@2x.png"
            propHeight="126px"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.receivePaymentWrapper}>
              <b className={styles.receivePayment}>Receive payment</b>
            </div>
            <div className={styles.coinInHandParent}>
              <img
                className={styles.coinInHand}
                alt=""
                src="/coin-in-hand@2x.png"
              />
              <img
                className={styles.payment1Icon}
                loading="lazy"
                alt=""
                src="/payment-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
