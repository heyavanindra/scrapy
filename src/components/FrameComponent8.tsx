import { FunctionComponent } from "react";
import styles from "./FrameComponent8.module.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contactContainerWrapper, className].join(" ")}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <div className={styles.contactDetails}>
            <div className={styles.contactMethods}>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
            <div className={styles.phoneEmail}>
              <div className={styles.phoneContainer}>
                <div className={styles.phoneNumber}>
                  <div className={styles.phoneIcon}>
                    <img
                      className={styles.phoneIcon1}
                      loading="lazy"
                      alt=""
                      src="/phone@2x.png"
                    />
                    <div className={styles.div}>
                      <span>{`+91 `}</span>
                      <i>{`7068065306 `}</i>
                    </div>
                  </div>
                  <div className={styles.emailContainer}>
                    <img
                      className={styles.emailIcon}
                      loading="lazy"
                      alt=""
                      src="/email@2x.png"
                    />
                    <div className={styles.emailAddress}>
                      <div className={styles.scrappylucknowgmailcom}>
                        scrappy.lucknow@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.supportHours}>
                  <div className={styles.customerSupportAvailable}>
                    Customer Support available
                  </div>
                  <div className={styles.findUs}>
                    <div className={styles.findUsHere}>Find Us Here</div>
                  </div>
                </div>
                <div className={styles.socialMedia}>
                  <div className={styles.socialIcons}>
                    <img
                      className={styles.instagram1Icon}
                      loading="lazy"
                      alt=""
                      src="/instagram-1@2x.png"
                    />
                    <div className={styles.socialIcon}>
                      <img
                        className={styles.iconShape}
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <img
                      className={styles.facebookkIcon}
                      loading="lazy"
                      alt=""
                      src="/facebookk.svg"
                    />
                    <img
                      className={styles.instagram1Icon}
                      loading="lazy"
                      alt=""
                      src="/linkedin-logo-initials-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.workingHours}>
                <div className={styles.customerSupportAvailable}>
                  from 10am - 7pm
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <img
            className={styles.footerGraphicIcon}
            alt=""
            src="/footer-graphic.svg"
          />
          <img
            className={styles.scrappyLogo2}
            loading="lazy"
            alt=""
            src="/scrappy-logo-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
