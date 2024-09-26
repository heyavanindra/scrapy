import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AutomaticNames1.module.css";

export type AutomaticNames1Type = {
  className?: string;
  rS20Kg?: string;

  /** Style props */
  automaticNamesWidth1?: CSSProperties["width"];
  automaticNamesFlex1?: CSSProperties["flex"];
  automaticNamesMinWidth1?: CSSProperties["minWidth"];
  propLeft?: CSSProperties["left"];
};

const AutomaticNames1: FunctionComponent<AutomaticNames1Type> = ({
  className = "",
  automaticNamesWidth1,
  automaticNamesFlex1,
  automaticNamesMinWidth1,
  rS20Kg,
  propLeft,
}) => {
  const automaticNamesStyle: CSSProperties = useMemo(() => {
    return {
      width: automaticNamesWidth1,
      flex: automaticNamesFlex1,
      minWidth: automaticNamesMinWidth1,
    };
  }, [automaticNamesWidth1, automaticNamesFlex1, automaticNamesMinWidth1]);

  const rS20KgStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={[styles.automaticNames, className].join(" ")}
      style={automaticNamesStyle}
    >
      <div className={styles.rs20kg} style={rS20KgStyle}>
        {rS20Kg}
      </div>
      <div className={styles.automaticImages}>
        <div className={styles.automaticImageTypes} />
        <img
          className={styles.waterHeater1Icon}
          loading="lazy"
          alt=""
          src="/waterheater-1@2x.png"
        />
      </div>
    </div>
  );
};

export default AutomaticNames1;
