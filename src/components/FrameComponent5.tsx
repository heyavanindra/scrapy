import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonialsContentWrapper, className].join(" ")}>
      <div className={styles.testimonialsContent}>
        <div className={styles.testimonialsWrapper}>
          <h2 className={styles.testimonials}>Testimonials</h2>
        </div>
        <div className={styles.testimonialCarousel}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.testimonialOneContent}>
              <div className={styles.testimonialOneContentChild} />
              <img
                className={styles.testimonialOneAvatars}
                alt=""
                src="/testimonial-one-avatars@2x.png"
              />
              <div className={styles.testimonialOneDetails}>
                <div className={styles.wahisZoya}>Wahi's Zoya</div>
              </div>
            </div>
            <div className={styles.testimonialQuotes}>
              <div className={styles.theScrappyTeam}>
                The Scrappy Team was really professional and their services the
                best that I have seen in my entire life of 45 years. Could not
                have asked anything more. Simply awesome 👏
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild} />
            <div className={styles.rectangleContainer}>
              <div className={styles.testimonialOneContentChild} />
              <img
                className={styles.testimonialOneAvatars}
                loading="lazy"
                alt=""
                src="/ellipse-2@2x.png"
              />
              <div className={styles.testimonialOneDetails}>
                <div className={styles.preetiVerma}>Preeti Verma</div>
              </div>
            </div>
            <div className={styles.itWasSuchAPleasantExperieWrapper}>
              <div className={styles.theScrappyTeam}>
                It was such a pleasant experience with Scrappy, the process was
                so simple, i just simply filled the details online and selected
                the date and time for pickup, the concerned person contacted me
                and reached at the desired time.
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameChild} />
            <div className={styles.rectangleParent1}>
              <div className={styles.testimonialOneContentChild} />
              <img
                className={styles.testimonialOneAvatars}
                loading="lazy"
                alt=""
                src="/ellipse-6@2x.png"
              />
              <div className={styles.testimonialOneDetails}>
                <div className={styles.preetiVerma}>Prince Madan</div>
              </div>
            </div>
            <div className={styles.wasFedUpOfOurLocalSocietWrapper}>
              <div className={styles.theScrappyTeam}>
                Was fed up of our local society kabadiwala who did as per his
                own whim because of the monopoly.. tried Scrappy and found the
                service to be smooth, transparent, convenient and extremely
                professional.. great initiative.. will surely use again and
                recommend to all in Lucknow.
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild} />
            <div className={styles.rectangleParent3}>
              <div className={styles.testimonialOneContentChild} />
              <img
                className={styles.testimonialOneAvatars}
                loading="lazy"
                alt=""
                src="/ellipse-5@2x.png"
              />
              <div className={styles.testimonialOneDetails}>
                <div className={styles.preetiVerma}>Pushkin Gupta</div>
              </div>
            </div>
            <div className={styles.extremelyPromptServiceVeryWrapper}>
              <div className={styles.extremelyPromptService}>
                Extremely prompt service. Very polite customer interhelper- and
                the collection team was thorough, helpful and very neat. Really
                appreciate the work put in.
              </div>
            </div>
          </div>
          <div className={styles.productitem}>
            <div className={styles.frameChild} />
            <div className={styles.rectangleParent4}>
              <div className={styles.testimonialOneContentChild} />
              <img
                className={styles.testimonialOneAvatars}
                loading="lazy"
                alt=""
                src="/ellipse-4@2x.png"
              />
              <div className={styles.testimonialOneDetails}>
                <div className={styles.preetiVerma}>Varsha Gupta</div>
              </div>
            </div>
            <div className={styles.extremelyPromptServiceVeryWrapper}>
              <div className={styles.extremelyPromptService}>
                I have used Scrappy twice for scrap collection. It is easy to
                schedule your request via website, collection was on time and
                they offer great rates.
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent5}>
            <div className={styles.frameChild} />
            <div className={styles.rectangleParent6}>
              <div className={styles.testimonialOneContentChild} />
              <img
                className={styles.frameChild10}
                loading="lazy"
                alt=""
                src="/ellipse-3@2x.png"
              />
              <div className={styles.testimonialOneDetails}>
                <div className={styles.vanshikaTripathi}>Vanshika Tripathi</div>
              </div>
            </div>
            <div className={styles.veryGoodAppToSellYourScrWrapper}>
              <div className={styles.veryGoodApp}>
                Very good app to sell your scrap, instant payment, and on-time
                pickup, good customer support..keep rising 👍🏻..
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
