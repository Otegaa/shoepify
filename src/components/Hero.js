import { useEffect, useState } from 'react';
import styles from '../CSS/All.module.css';
import ShoeOverview from './ShoeOverview';
import { data } from '../data';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('in');
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSmallImageIndex, setSelectedSmallImageIndex] = useState(0);

  const { imgBig, name } = data[index];

  const handleNextShoe = () => {
    setSlideDirection('out');
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setSelectedSmallImageIndex((prevIndex) => (prevIndex + 1) % data.length);
      setSlideDirection('in');
    }, 500);
  };

  const handlePrevShoe = () => {
    setSlideDirection('out');
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      );
      setSelectedSmallImageIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      );
      setSlideDirection('in');
    }, 500);
  };

  const handleSelectShoe = (shoeIndex) => {
    setIndex(shoeIndex);
    setCurrentIndex(shoeIndex);
    setSelectedShoe(data[shoeIndex]);
    setSelectedSmallImageIndex(shoeIndex);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1000) {
      const handleInterval = setInterval(() => {
        handleNextShoe();
      }, 3000);

      return () => {
        clearInterval(handleInterval);
      };
    }
  }, [index]);

  return (
    <>
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
            {data.map((shoe, shoeIndex) => {
              const { id, imgSmall } = shoe;
              const isSelected = shoeIndex === selectedSmallImageIndex;
              return (
                <div
                  className={`${styles.smallShoeImg} ${
                    isSelected ? styles.selectedSmallImage : ''
                  }`}
                  key={id}
                  onClick={() => handleSelectShoe(shoeIndex)}
                >
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
          <button onClick={handlePrevShoe} className={styles.btnPrev}>
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
          <button onClick={handleNextShoe} className={styles.btnNext}>
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
      {selectedShoe && (
        <ShoeOverview
          shoe={selectedShoe}
          onClose={() => setSelectedShoe(null)}
          currentIndex={currentIndex}
          selectedSmallImageIndex={selectedSmallImageIndex}
          handleSelectShoe={handleSelectShoe}
          onPrev={handlePrevShoe}
          onNext={handleNextShoe}
        />
      )}
    </>
  );
};
export default Hero;
