import styles from '../CSS/ShoePopup.module.css';
import sharedStyles from '../CSS/Shared.module.css';
import { data } from '../data';

const ShoePopup = ({
  onClose,
  currentIndex,
  onPrev,
  onNext,
  selectedSmallImageIndex,
  handleSelectShoe,
}) => {
  return (
    <div className={styles.shoePopupOverlay}>
      <div className={styles.shoePopupContainer}>
        <div className={styles.btnCloseContainer}>
          <button className={styles.btnClose} onClick={onClose}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#fff"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className={styles.shoePopupBigShoesContainer}>
          <div className={styles.shoePopupBigShoes}>
            <img
              src={data[currentIndex].imgBig}
              alt={data[currentIndex].name}
              className={styles.shoePopupBigShoesImg}
            />
          </div>
          <div className={styles.shoePopupBtnContainer}>
            <button onClick={onPrev} className={styles.shoePopupBtnPrev}>
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
            <button onClick={onNext} className={styles.shoePopupBtnNext}>
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
        <div className={styles.shoePopupSmallShoesContainer}>
          {data.map((shoe, shoeIndex) => {
            const { id, imgSmall, name } = shoe;
            const isSelected = shoeIndex === selectedSmallImageIndex;
            return (
              <div
                className={`${styles.shoePopupSmallShoes} ${
                  isSelected ? sharedStyles.selectedSmallImage : ''
                }`}
                key={id}
                onClick={() => handleSelectShoe(shoeIndex)}
              >
                <img
                  src={imgSmall}
                  alt={name}
                  className={styles.shoePopupSmallShoesImg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ShoePopup;
