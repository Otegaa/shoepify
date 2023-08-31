import { useEffect, useState } from 'react';
import styles from '../CSS/All.module.css';
import { data } from '../data';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('in');

  const { imgBig, name } = data[index];

  const handleNextPerson = () => {
    setSlideDirection('out');
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
      setSlideDirection('in');
    }, 500);
  };

  const handlePrevPerson = () => {
    setSlideDirection('out');
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      setSlideDirection('in');
    }, 500);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1000) {
      const handleInterval = setInterval(() => {
        handleNextPerson();
      }, 3000);

      return () => {
        clearInterval(handleInterval);
      };
    }
  }, [index]);

  return (
    <div className={styles.heroShoe}>
      <div className={styles.allShoeContainer}>
        <div
          className={`${styles.shoeContainer} ${
            slideDirection === 'in' ? styles.slideIn : styles.slideOut
          }`}
        >
          <img src={imgBig} alt={name} className={styles.shoeImg} />
        </div>
        <div className={styles.smallShoesContainer}>
          {data.map((shoe) => {
            const { id, imgSmall } = shoe;
            return (
              <div className={styles.smallShoeImg} key={id}>
                <img
                  src={imgSmall}
                  alt={`shoe${id}`}
                  className={styles.smallShoeImg}
                />
              </div>
            );
          })}
        </div>
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
  );
};
export default Hero;
