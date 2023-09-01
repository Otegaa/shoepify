import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HeroDetails from './components/HeroDetails';
import styles from './CSS/All.module.css';

function App() {
  const [totalInCart, setTotalInCart] = useState(0);
  const [isCartClicked, setIsCartClicked] = useState(false);

  return (
    <>
      <Nav
        totalInCart={totalInCart}
        setTotalInCart={setTotalInCart}
        isCartClicked={isCartClicked}
        setIsCartClicked={setIsCartClicked}
      />
      <div className={styles.sliderContainer}>
        <Hero setIsCartClicked={setIsCartClicked} />
        <HeroDetails setTotalInCart={setTotalInCart} />
      </div>
    </>
  );
}

export default App;
