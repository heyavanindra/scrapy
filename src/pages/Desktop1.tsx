import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import Content1 from "../components/Content1";
import PaperTypes1 from "../components/PaperTypes1";
import Metal1 from "../components/Metal1";
import LargeApplianceTypes1 from "../components/LargeApplianceTypes1";
import Automatic1 from "../components/Automatic1";
import FrameComponent9 from "../components/FrameComponent9";
import HeavyItems1 from "../components/HeavyItems1";
import styles from "./Desktop1.module.css";

const Desktop1: FunctionComponent = () => {
  return (
    <div className={styles.desktop2}>
      <Header1 />
      <Content1 />
      <main className={styles.appliances}>
        <div className={styles.washingMachineImage}>
          <img
            className={styles.smartWashingMachine13}
            loading="lazy"
            alt=""
            src="/smartwashingmachine-1-3@2x.png"
          />
        </div>
        <section className={styles.paper}>
          <PaperTypes1 />
          <Metal1 />
          <LargeApplianceTypes1 />
          <Automatic1 />
          <FrameComponent9 />
          <HeavyItems1 />
          <div className={styles.vehicleWrapperParent}>
            <div className={styles.vehicleWrapper}>
              <div className={styles.vehicleIcons}>
                <div className={styles.bikeCar}>
                  <div className={styles.bikeCarChild} />
                  <div className={styles.vehicleImages}>
                    <img
                      className={styles.bikeicon1}
                      loading="lazy"
                      alt=""
                      src="/bikeicon-1@2x.png"
                    />
                  </div>
                  <div className={styles.rs2100piece}>RS 2100/piece</div>
                </div>
                <div className={styles.bikeCar1}>
                  <div className={styles.bikeCarChild} />
                  <div className={styles.caricon1Wrapper}>
                    <img
                      className={styles.bikeicon1}
                      loading="lazy"
                      alt=""
                      src="/caricon-1@2x.png"
                    />
                  </div>
                  <div className={styles.rs20000piece}>RS 20000/piece</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.bikeWrapper}>
                <div className={styles.bike}>Bike</div>
              </div>
              <div className={styles.car}>Car</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop1;
