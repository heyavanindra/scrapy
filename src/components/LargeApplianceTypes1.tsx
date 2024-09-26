import { FunctionComponent } from "react";
import styles from "./LargeApplianceTypes1.module.css";

export type LargeApplianceTypes1Type = {
  className?: string;
};

const LargeApplianceTypes1: FunctionComponent<LargeApplianceTypes1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.largeApplianceTypes, className].join(" ")}>
      <div className={styles.largeApplianceList}>
        <div className={styles.largeAppliancePrices}>
          <div className={styles.largeApplianceItems}>
            <div className={styles.aCImage}>
              <div className={styles.aC}>
                <div className={styles.aCChild} />
                <div className={styles.windowAC}>
                  <img
                    className={styles.airConditioner1Icon}
                    loading="lazy"
                    alt=""
                    src="/airconditioner-1@2x.png"
                  />
                </div>
                <div className={styles.rs3500piece}>RS 3500/piece</div>
              </div>
            </div>
            <div className={styles.largeApplianceNames}>
              <div className={styles.largeApplianceNameValues}>
                <div className={styles.aCChild} />
                <div className={styles.largeApplianceNameValueIte}>
                  <img
                    className={styles.airConditioner1Icon}
                    loading="lazy"
                    alt=""
                    src="/airconditioner1-1@2x.png"
                  />
                </div>
                <div className={styles.rs3500piece}>RS 4200/piece</div>
              </div>
            </div>
            <div className={styles.largeApplianceNames1}>
              <div className={styles.rectangleParent}>
                <div className={styles.aCChild} />
                <div className={styles.airConditioner2Wrapper}>
                  <img
                    className={styles.airConditioner1Icon}
                    loading="lazy"
                    alt=""
                    src="/airconditioner-1@2x.png"
                  />
                </div>
                <div className={styles.rs3500piece}>RS 3000/piece</div>
              </div>
            </div>
            <div className={styles.largeApplianceNames2}>
              <div className={styles.rectangleGroup}>
                <div className={styles.aCChild} />
                <div className={styles.smartWashingMachine11Wrapper}>
                  <img
                    className={styles.airConditioner1Icon}
                    loading="lazy"
                    alt=""
                    src="/smartwashingmachine-1-3@2x.png"
                  />
                </div>
                <div className={styles.rs3500piece}>RS 1300/piece</div>
              </div>
            </div>
            <div className={styles.largeApplianceNames3}>
              <div className={styles.rectangleContainer}>
                <div className={styles.aCChild} />
                <div className={styles.airConditioner3Wrapper}>
                  <img
                    className={styles.airConditioner1Icon}
                    loading="lazy"
                    alt=""
                    src="/airconditioner-1@2x.png"
                  />
                </div>
                <div className={styles.rs3500piece}>RS 4500/piece</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.coilAC}>
          <div className={styles.splitAC}>
            <div className={styles.splitAcCopper}>
              Split AC Copper Coil 1.5 Ton (Indoor + Outdoor)
            </div>
          </div>
          <div className={styles.coilACTypes}>
            <div className={styles.splitAcCopper}>
              Window AC 1.5 Ton (Copper Coil)
            </div>
          </div>
          <div className={styles.coilACTypes1}>
            <div className={styles.splitAcCopper}>AC 1 Ton (Copper Coil)</div>
          </div>
          <div className={styles.frontLoad}>
            <div className={styles.splitAcCopper}>
              Front Load Fully Automatic Washing Machine
            </div>
          </div>
          <div className={styles.coilACTypes2}>
            <a className={styles.ac2Ton}>AC 2 Ton (Copper Coil)</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeApplianceTypes1;
