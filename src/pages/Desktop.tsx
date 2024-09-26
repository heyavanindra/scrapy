import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import HouseholdBusinessNeeds from "../components/HouseholdBusinessNeeds";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent8 from "../components/FrameComponent8";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    
    <div className={styles.desktop1}>
      <section className={styles.frameParent}>
        <FrameComponent3 />
        <FrameComponent6 />
      </section>
      <FrameComponent7 />
      <section className={styles.customerTypesContentWrapper}>
        <div className={styles.customerTypesContent}>
          <div className={styles.householdsBusinessesHaveDWrapper}>
            <h3
              className={styles.householdsBusinesses}
            >{`Households & Businesses have different needs and we cater to each of them`}</h3>
          </div>
          <HouseholdBusinessNeeds />
          <FrameComponent4 />
          <FrameComponent5 />
        </div>
      </section>
      <FrameComponent8 />
    </div>
  );
};

export default Desktop;
