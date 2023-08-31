import { useState } from 'react';
import styles from '../CSS/All.module.css';
import { data } from '../data';

const ShoeOverview = () => {
  const [index, setIndex] = useState(0);
  const { imgBig, name } = data[index];

  const handleNextShoe = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevShoe = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className={styles.shoeOverviewOverlay}>
      <div className={styles.shoeOverviewContainer}>
        <button className={styles.btnClose}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className={styles.shoeOverviewBigShoesContainer}>
          <div className={styles.shoeOverViewBigShoes}>
            <img
              src={imgBig}
              alt={name}
              className={styles.shoeOverViewBigShoesImg}
            />
          </div>
          <div className={styles.shoeOverviewBtnContainer}>
            <button
              onClick={handlePrevShoe}
              className={styles.shoeOverviewBtnPrev}
            >
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={handleNextShoe}
              className={styles.shoeOverviewBtnNext}
            >
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.shoeOverviewSmallShoesContainer}>
          {data.map((shoe) => {
            const { id, imgSmall, name } = shoe;
            return (
              <div className={styles.shoeOverViewSmallShoes} key={id}>
                <img
                  src={imgSmall}
                  alt={name}
                  className={styles.shoeOverViewSmallShoesImg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ShoeOverview;
