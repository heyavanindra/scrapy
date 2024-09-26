import { FunctionComponent } from "react";
import AutomaticNames1 from "./AutomaticNames1";
import styles from "./Automatic1.module.css";

export type Automatic1Type = {
  className?: string;
};

const Automatic1: FunctionComponent<Automatic1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.automatic, className].join(" ")}>
      <div className={styles.automaticTypes}>
        <div className={styles.automaticPrices}>
          <div className={styles.automaticItems}>
            <div className={styles.automaticNames}>
              <div className={styles.automaticNameWeights}>
                <div className={styles.automaticNameWeightsChild} />
                <div className={styles.automaticNameValueItems}>
                  <img
                    className={styles.fridge1Icon}
                    loading="lazy"
                    alt=""
                    src="/smartwashingmachine-1-3@2x.png"
                  />
                </div>
                <div className={styles.rs3000piece}>RS 3000/piece</div>
              </div>
            </div>
            <div className={styles.automaticNames1}>
              <div className={styles.rectangleParent}>
                <div className={styles.automaticNameWeightsChild} />
                <div className={styles.smartWashingMachine14Wrapper}>
                  <img
                    className={styles.fridge1Icon}
                    loading="lazy"
                    alt=""
                    src="/smartwashingmachine-1-3@2x.png"
                  />
                </div>
                <div className={styles.rs3000piece}>RS 3000/piece</div>
              </div>
            </div>
            <div className={styles.automaticNames1}>
              <div className={styles.rectangleGroup}>
                <div className={styles.automaticNameWeightsChild} />
                <div className={styles.fridge1Wrapper}>
                  <img
                    className={styles.fridge1Icon}
                    loading="lazy"
                    alt=""
                    src="/fridge-1@2x.png"
                  />
                </div>
                <div className={styles.rs3000piece}>RS 2700/piece</div>
              </div>
            </div>
            <AutomaticNames1 rS20Kg="RS 20/Kg" />
            <AutomaticNames1
              automaticNamesWidth1="unset"
              automaticNamesFlex1="1"
              automaticNamesMinWidth1="131px"
              rS20Kg="RS 15/Kg"
              propLeft="55px"
            />
          </div>
        </div>
        <div className={styles.washingMachineTypes}>
          <div className={styles.washingMachineTypeValues}>
            <div className={styles.topLoadFully}>
              Top Load Fully Automatic Washing Machine
            </div>
          </div>
          <div className={styles.washingMachineTypeValues1}>
            <div className={styles.topLoadFully}>
              Semi Automatic Washing Machine (Double Drum)
            </div>
          </div>
          <div className={styles.singleDoorFridge}>Single Door Fridge</div>
          <div className={styles.washingMachineTypeValues2}>
            <div className={styles.geyser}>Geyser</div>
          </div>
          <div className={styles.cooler}>
            <div className={styles.geyser}>Plastic cooler</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automatic1;
