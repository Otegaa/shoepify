import { useState } from 'react';
import styles from '../CSS/Hero.module.css';
import { data } from '../data';
import { PiShoppingCart } from 'react-icons/pi';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const { id, imgBig, name } = data[index];

  const handleNextPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % data.length;
      return newIndex;
    });
  };
  const handlePrevPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + data.length) % data.length;
      return newIndex;
    });
  };
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.heroShoe}>
        <div className={styles.shoeContainer}>
          <img src={imgBig} alt={name} className={styles.shoeImg} />
        </div>
        <div className={styles.btnContainer}>
          <button onClick={handlePrevPerson} className={styles.btnPrev}>
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
          <button onClick={handleNextPerson} className={styles.btnNext}>
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
      <div className={styles.heroDetails}>
        <h3 className={styles.company}>Shoepify company</h3>
        <h2 className={styles.shoeAd}>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className={styles.price}>
          <div className={styles.discountPrice}>
            <h3>$125.00</h3>
            <button className={styles.discountBtn}>-50%</button>
          </div>
          <div className={styles.actualPrice}>
            <h3>$250.00</h3>
          </div>
        </div>
        <div className={styles.cartDetails}>
          <div className={styles.detailsBg}>
            <button>
              <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                  fill="#FF7E1B"
                  fillRule="nonzero"
                />
              </svg>
            </button>
            <p>0</p>
            <button>
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                  fill="#FF7E1B"
                  fillRule="nonzero"
                />
              </svg>
            </button>
          </div>
          <button className={styles.cartInbox}>
            <PiShoppingCart className={styles.cartIcon} />
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
