import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div
      className={[styles.businessIllust11UjviecfrixzParent, className].join(
        " "
      )}
    >
      <img
        className={styles.businessIllust11UjviecfrixzIcon}
        loading="lazy"
        alt=""
        src="/business-illust1-1-ujviecfrixz-1@2x.png"
      />
      <div className={styles.businessContent}>
        <div className={styles.frameParent}>
          <div className={styles.forBusinessesWrapper}>
            <h3 className={styles.forBusinesses}>For Businesses</h3>
          </div>
          <div className={styles.businessBenefits}>
            <div className={styles.businessBenefitIconsWrapper}>
              <div className={styles.businessBenefitIcons}>
                <img
                  className={styles.xcheckS1k62cb8i4Icon}
                  loading="lazy"
                  alt=""
                  src="/99xcheck-s1k62cb8i-4@2x.png"
                />
                <img
                  className={styles.xcheckS1k62cb8i5Icon}
                  loading="lazy"
                  alt=""
                  src="/99xcheck-s1k62cb8i-1.svg"
                />
                <img
                  className={styles.xcheckS1k62cb8i5Icon}
                  loading="lazy"
                  alt=""
                  src="/99xcheck-s1k62cb8i-1.svg"
                />
              </div>
            </div>
            <div className={styles.formalPaymentsDocumentatioParent}>
              <h3
                className={styles.formalPayments}
              >{`Formal Payments & Documentation`}</h3>
              <h3 className={styles.sustainabilityReports}>
                Sustainability Reports
              </h3>
              <h3 className={styles.competitivePrices}>Competitive Prices</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
