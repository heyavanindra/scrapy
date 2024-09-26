import { FunctionComponent } from "react";
import styles from "./PaperTypes1.module.css";

export type PaperTypes1Type = {
  className?: string;
};

const PaperTypes1: FunctionComponent<PaperTypes1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.paperTypes, className].join(" ")}>
      <div className={styles.paperPrices}>
        <div className={styles.paperList}>
          <div className={styles.paperItems}>
            <div className={styles.paperNames}>
              <div className={styles.paperNamesChild} />
              <div className={styles.paperNameValues}>
                <img
                  className={styles.papersRortdynz71Icon}
                  loading="lazy"
                  alt=""
                  src="/papers-rortdynz7-1@2x.png"
                />
              </div>
              <div className={styles.rs14kg}>RS 14/kg</div>
            </div>
          </div>
          <div className={styles.paperItems1}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.rs14kg}>RS 14/kg</div>
            </div>
          </div>
          <div className={styles.paperItems2}>
            <div className={styles.rectangleGroup}>
              <div className={styles.paperNamesChild} />
              <div className={styles.books1Wrapper}>
                <img
                  className={styles.books1Icon}
                  loading="lazy"
                  alt=""
                  src="/books-1@2x.png"
                />
              </div>
              <div className={styles.rs14kg}>RS 10/kg</div>
            </div>
          </div>
          <div className={styles.boxImage}>
            <div className={styles.paperNamesChild} />
            <div className={styles.box}>
              <img
                className={styles.papersRortdynz71Icon}
                loading="lazy"
                alt=""
                src="/box-1@2x.png"
              />
            </div>
            <div className={styles.rs7kg}>RS 7/kg</div>
          </div>
          <div className={styles.paperItems3}>
            <div className={styles.rectangleContainer}>
              <div className={styles.paperNamesChild} />
              <div className={styles.bin1Wrapper}>
                <img
                  className={styles.papersRortdynz71Icon}
                  loading="lazy"
                  alt=""
                  src="/bin-1@2x.png"
                />
              </div>
              <div className={styles.rs7kg}>RS 8/kg</div>
            </div>
          </div>
        </div>
        <div className={styles.officePaper}>
          <div className={styles.officePaperDetails}>
            <div className={styles.officePaperName}>
              <div className={styles.copiesbooksMarketRates}>
                Office Paper (A3/A4)
              </div>
            </div>
            <div className={styles.officePaperMarket}>
              <div className={styles.newspaperMarketRatesContainer}>
                <p className={styles.newspaper}>{`Newspaper `}</p>
                <p className={styles.newspaper}>**Market Rates</p>
                <p className={styles.newspaper}> Dropped Recently</p>
              </div>
            </div>
            <div className={styles.copiesBooks}>
              <div className={styles.copiesBooksDetails}>
                <div className={styles.copiesbooksMarketRates}>
                  Copies/Books **Market Rates Dropped Recently
                </div>
              </div>
              <div className={styles.cardboardToGetContainer}>
                <p className={styles.newspaper}>{`Cardboard `}</p>
                <p className={styles.toGetQuote}>
                  {" "}
                  **To get quote for bulk qty. call at +91-7068065306
                </p>
              </div>
            </div>
            <div className={styles.plasticWrapper}>
              <div className={styles.newspaperMarketRatesContainer}>
                Plastic
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperTypes1;
