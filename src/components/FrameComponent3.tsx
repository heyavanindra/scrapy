import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./FrameComponent3.module.css";
import { Link } from "react-router-dom";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <header className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.scrappyLogo1Parent}>
            <img
              className={styles.scrappyLogo1}
              loading="lazy"
              alt=""
              src="/scrappy-logo-1@2x.png"
            />
            <div className={styles.frameWrapper}>
              <div className={styles.homeParent}>
                <a className={styles.home}>Home</a>
                <a className={styles.whyUs}>{`Why Us ? `}</a>
              </div>
            </div>
            <div className={styles.scrapRatesWrapper}>
            <Link to={'/desktop-2'} className={styles.scrapRates}>  Scrap Rates</Link> 
            </div>
          </div>
          <div className={styles.scheduleAPickupWrapper}>
            <button className={styles.scheduleAPickup}>
              <div className={styles.scheduleAPickupChild} />
              <a className={styles.scheduleAPickup1}>SCHEDULE A PICKUP</a>
            </button>
          </div>
        </header>
        <div className={styles.frameContainer}>
          <div className={styles.cutTheCrappyChooseScrappyParent}>
            <h1 className={styles.cutTheCrappyContainer}>
              <p className={styles.cutThe}>{`Cut the  crappy, `}</p>
              <p className={styles.chooseScrappy}>
                <span>choose</span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.scrappy}>Scrappy</span>
              </p>
            </h1>
            <div className={styles.paperPlasticsMetalsApParent}>
              <b className={styles.paperPlastics}>
                Paper - Plastics - Metals - Appliances
              </b>
              <div className={styles.youCanAlsoContainer}>
                <span className={styles.youCan}>You can also use the</span>
                <span className={styles.scrappyApp}>{` Scrappy app `}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.box}>
              <div className={styles.boxChild} />
              <div className={styles.schedulePickupFields}>
                <div className={styles.scheduleAPickup2}>Schedule a Pickup</div>
                <div className={styles.mobile}>Mobile</div>
                <Form className={styles.numebr}>
                  <Form.Control type="number" />
                </Form>
              </div>
              <div className={styles.nextParent}>
                <button className={styles.next}>
                  <div className={styles.nextChild} />
                  <div className={styles.next1}>Next</div>
                </button>
                <i className={styles.facingProblemsCallContainer}>
                  <span>{`Facing problems? Call us at `}</span>
                  <span className={styles.span1}>+917068065306</span>
                  <span>{` `}</span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrappyPhoto1Wrapper}>
        <img
          className={styles.scrappyPhoto1}
          loading="lazy"
          alt=""
          src="/scrappy-photo-1@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
