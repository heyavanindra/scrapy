import { FunctionComponent } from "react";
import styles from "./FrameComponent9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <div
      className={[styles.smallAppliancesWrapperWrapper, className].join(" ")}
    >
      <div className={styles.smallAppliancesWrapper}>
        <div className={styles.smallAppliancesHeading}>
          <h1 className={styles.smallAppliances}>Small Appliances</h1>
        </div>
        <div className={styles.smallAppliancesItems}>
          <div className={styles.electronicItems}>
            <div className={styles.electronicItemsGrid}>
              <div className={styles.electronicItemsRowOne}>
                <div className={styles.lampRadiationMicrowave}>
                  <div className={styles.lampRadiationMicrowaveChild} />
                  <div className={styles.lampRadiationMicrowaveImage}>
                    <img
                      className={styles.lamp1Icon}
                      loading="lazy"
                      alt=""
                      src="/lamp-1@2x.png"
                    />
                  </div>
                  <div className={styles.rs20kg}>RS 20/Kg</div>
                </div>
              </div>
              <div className={styles.electronicItemsRowOne1}>
                <div className={styles.rectangleParent}>
                  <div className={styles.lampRadiationMicrowaveChild} />
                  <div className={styles.radiation1Wrapper}>
                    <img
                      className={styles.lamp1Icon}
                      loading="lazy"
                      alt=""
                      src="/radiation-1@2x.png"
                    />
                  </div>
                  <div className={styles.rs20kg}>RS 15/Kg</div>
                </div>
              </div>
              <div className={styles.generatorItem}>
                <div className={styles.lampRadiationMicrowaveChild} />
                <div className={styles.generatorImage}>
                  <img
                    className={styles.lamp1Icon}
                    loading="lazy"
                    alt=""
                    src="/generator-1@2x.png"
                  />
                </div>
                <div className={styles.rs30kg}>RS 30/Kg</div>
              </div>
              <div className={styles.electronicItemsRowOne2}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.lampRadiationMicrowaveChild} />
                  <div className={styles.lampRadiationMicrowaveImage}>
                    <img
                      className={styles.lamp1Icon}
                      loading="lazy"
                      alt=""
                      src="/microwave-1@2x.png"
                    />
                  </div>
                  <div className={styles.rs20kg}>RS 20/Kg</div>
                </div>
              </div>
              <div className={styles.printerItem}>
                <div className={styles.printerImage}>
                  <div className={styles.lampRadiationMicrowaveChild} />
                  <div className={styles.printer}>
                    <img
                      className={styles.lamp1Icon}
                      loading="lazy"
                      alt=""
                      src="/printer-1@2x.png"
                    />
                  </div>
                  <div className={styles.rs20kg}>RS 25Kg</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ewasteTypes}>
            <div className={styles.ewasteCategories}>
              <div className={styles.plasticEWaste}>Plastic E-waste</div>
            </div>
            <div className={styles.metalEwaste}>
              <div className={styles.plasticEWaste}>Metal E-waste</div>
            </div>
            <div className={styles.ups}>UPS</div>
            <div className={styles.ewasteCategories}>
              <div className={styles.plasticEWaste}>Microwave</div>
            </div>
            <div className={styles.ewasteCategories}>
              <a className={styles.printerscannerfaxMachine}>
                Printer/scanner/fax machine
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
