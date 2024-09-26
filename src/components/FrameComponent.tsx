import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  scheduleAPickup?: string;
  cALENDER1?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  propGap,
  scheduleAPickup,
  cALENDER1,
  propHeight,
}) => {
  const stepOneContentStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const cALENDER1IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={[styles.stepOneContentWrapper, className].join(" ")}>
      <div className={styles.stepOneContent} style={stepOneContentStyle}>
        <div className={styles.stepOneContentChild} />
        <b className={styles.scheduleAPickup}>{scheduleAPickup}</b>
        <div className={styles.calender1Wrapper}>
          <img
            className={styles.calender1Icon}
            loading="lazy"
            alt=""
            src={cALENDER1}
            style={cALENDER1IconStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
