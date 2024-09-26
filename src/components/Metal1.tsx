import { FunctionComponent } from "react";
import styles from "./Metal1.module.css";

export type Metal1Type = {
  className?: string;
};

const Metal1: FunctionComponent<Metal1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.metal, className].join(" ")}>
      <div className={styles.metalTypes}>
        <div className={styles.metalList}>
          <div className={styles.metalItems}>
            <div className={styles.metalNames}>
              <div className={styles.metalNamesChild} />
              <div className={styles.metalNameValues}>
                <img
                  className={styles.beam1Icon}
                  loading="lazy"
                  alt=""
                  src="/beam-1@2x.png"
                />
              </div>
              <div className={styles.rs25kg}>RS 25/kg</div>
            </div>
          </div>
          <div className={styles.metalItems1}>
            <div className={styles.rectangleParent}>
              <div className={styles.metalNamesChild} />
              <div className={styles.hook1Wrapper}>
                <img
                  className={styles.beam1Icon}
                  loading="lazy"
                  alt=""
                  src="/hook-1@2x.png"
                />
              </div>
              <div className={styles.rs37kg}>RS 37/kg</div>
            </div>
          </div>
          <div className={styles.metalItems1}>
            <div className={styles.rectangleGroup}>
              <div className={styles.metalNamesChild} />
              <div className={styles.beer1Wrapper}>
                <img
                  className={styles.beam1Icon}
                  loading="lazy"
                  alt=""
                  src="/beer-1@2x.png"
                />
              </div>
              <div className={styles.rs105kg}>RS 105/kg</div>
            </div>
          </div>
          <div className={styles.metalItems3}>
            <div className={styles.metalNamesChild} />
            <div className={styles.brassNuckle1Wrapper}>
              <img
                className={styles.beam1Icon}
                loading="lazy"
                alt=""
                src="/brassnuckle-1@2x.png"
              />
            </div>
            <div className={styles.rs105kg}>RS 325/kg</div>
          </div>
          <div className={styles.metalItems4}>
            <div className={styles.metalNamesChild} />
            <div className={styles.hook1Wrapper}>
              <img
                className={styles.beam1Icon}
                loading="lazy"
                alt=""
                src="/wire-1@2x.png"
              />
            </div>
            <div className={styles.rs105kg}>RS 445/kg</div>
          </div>
        </div>
      </div>
      <div className={styles.utensils}>
        <div className={styles.ironToGetContainer}>
          <p className={styles.iron}>Iron</p>
          <p className={styles.toGetQuote}>
            {" "}
            **To get quote for bulk qty. call at +91-8595358613
          </p>
        </div>
        <div className={styles.utensilTypes}>
          <div className={styles.steelUtensils}>Steel Utensils</div>
        </div>
        <div className={styles.utensilTypes1}>
          <div className={styles.aluminium}>Aluminium</div>
        </div>
        <div className={styles.utensilTypes2}>
          <div className={styles.brass}>Brass</div>
        </div>
        <div className={styles.utensilTypes3}>
          <a className={styles.copper}>Copper</a>
        </div>
      </div>
      <div className={styles.largeAppliancesWrapper}>
        <h1 className={styles.largeAppliances}>Large Appliances</h1>
      </div>
    </div>
  );
};

export default Metal1;
