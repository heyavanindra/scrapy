import { FunctionComponent } from "react";
import styles from "./HeavyItems1.module.css";

export type HeavyItems1Type = {
  className?: string;
};

const HeavyItems1: FunctionComponent<HeavyItems1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.heavyItems, className].join(" ")}>
      <div className={styles.heavyItemsWrapper}>
        <div className={styles.heavyItemsGrid}>
          <div className={styles.heavyItemsRowOne}>
            <div className={styles.generatorEngineBattery}>
              <div className={styles.generatorEngineFanBattery}>
                <div className={styles.generatorEngineFanBatteryChild} />
                <div className={styles.generatorEngineItems}>
                  <img
                    className={styles.generator11Icon}
                    loading="lazy"
                    alt=""
                    src="/generator1-1@2x.png"
                  />
                </div>
                <div className={styles.rs20kg}>RS 20/Kg</div>
              </div>
            </div>
            <div className={styles.generatorEngineBattery}>
              <div className={styles.rectangleParent}>
                <div className={styles.generatorEngineFanBatteryChild} />
                <div className={styles.engine1Wrapper}>
                  <img
                    className={styles.generator11Icon}
                    loading="lazy"
                    alt=""
                    src="/engine-1@2x.png"
                  />
                </div>
                <div className={styles.rs20kg}>RS 17/Kg</div>
              </div>
            </div>
            <div className={styles.generatorEngineBattery2}>
              <div className={styles.generatorEngineFanBatteryChild} />
              <div className={styles.fan1Wrapper}>
                <img
                  className={styles.generator11Icon}
                  loading="lazy"
                  alt=""
                  src="/fan-1@2x.png"
                />
              </div>
              <div className={styles.rs20kg}>RS 22/Kg</div>
            </div>
            <div className={styles.generatorEngineBattery3}>
              <div className={styles.rectangleGroup}>
                <div className={styles.generatorEngineFanBatteryChild} />
                <div className={styles.television1Wrapper}>
                  <img
                    className={styles.generator11Icon}
                    loading="lazy"
                    alt=""
                    src="/television-1@2x.png"
                  />
                </div>
                <div className={styles.rs20kg}>RS 19/Kg</div>
              </div>
            </div>
            <div className={styles.generatorEngineBattery4}>
              <div className={styles.generatorEngineFanBatteryChild} />
              <div className={styles.fan1Wrapper}>
                <img
                  className={styles.generator11Icon}
                  alt=""
                  src="/battery-1@2x.png"
                />
              </div>
              <div className={styles.rs20kg}>RS 50/Kg</div>
            </div>
          </div>
        </div>
        <div className={styles.motorInverterCrt}>
          <div className={styles.motorInverterCrtNames}>
            <div className={styles.motorsCopperWiring}>
              Motors (Copper wiring)
            </div>
          </div>
          <div className={styles.motorInverterCrtNames1}>
            <div className={styles.motorsCopperWiring}>
              Inverter/Stabilizer (Copper Coil)
            </div>
          </div>
          <div className={styles.ceilingFan}>Ceiling Fan</div>
          <div className={styles.motorInverterCrtNames2}>
            <div className={styles.crtTv}>CRT TV</div>
          </div>
          <div className={styles.motorInverterCrtNames2}>
            <a className={styles.batteryusedWithInverters}>
              Battery(used with inverters)
            </a>
          </div>
        </div>
        <div className={styles.mobileComputerHeadingParent}>
          <div className={styles.mobileComputerHeading}>
            <h1 className={styles.mobilesComputers}>{`Mobiles & Computers`}</h1>
          </div>
          <div className={styles.computerItems}>
            <div className={styles.computerGrid}>
              <div className={styles.laptopComputer}>
                <div className={styles.laptopDesktop}>
                  <div className={styles.generatorEngineFanBatteryChild} />
                  <div className={styles.computerTypes}>
                    <img
                      className={styles.generator11Icon}
                      loading="lazy"
                      alt=""
                      src="/blacklaptop-1@2x.png"
                    />
                  </div>
                  <div className={styles.rs20kg}>RS 300/piece</div>
                </div>
              </div>
              <div className={styles.laptopComputer1}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.generatorEngineFanBatteryChild} />
                  <div className={styles.computer21Wrapper}>
                    <img
                      className={styles.generator11Icon}
                      loading="lazy"
                      alt=""
                      src="/computer2-1@2x.png"
                    />
                  </div>
                  <div className={styles.rs20kg}>RS 150/piece</div>
                </div>
              </div>
              <div className={styles.laptopComputer2}>
                <div className={styles.generatorEngineFanBatteryChild} />
                <div className={styles.computer21Container}>
                  <img
                    className={styles.generator11Icon}
                    alt=""
                    src="/computer2-1@2x.png"
                  />
                </div>
                <div className={styles.rs20kg}>RS 100/piece</div>
              </div>
              <div className={styles.laptopComputer3}>
                <div className={styles.generatorEngineFanBatteryChild} />
                <div className={styles.computer21Frame}>
                  <img
                    className={styles.generator11Icon}
                    alt=""
                    src="/computer2-1@2x.png"
                  />
                </div>
                <div className={styles.rs20kg}>RS 200/piece</div>
              </div>
            </div>
          </div>
          <div className={styles.scrapLaptopCrt}>
            <div className={styles.scrapLaptopCrtCpu}>
              <div className={styles.crtTv}>Scrap Laptop</div>
            </div>
            <div className={styles.scrapLaptopCrtCpu1}>
              <div className={styles.crtTv}>CRT Monitor</div>
            </div>
            <div className={styles.ceilingFan}>LCD Monitor</div>
            <div className={styles.ceilingFan}>Computer CPU</div>
          </div>
          <div className={styles.othersWrapper}>
            <h1 className={styles.others}>Others</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeavyItems1;
