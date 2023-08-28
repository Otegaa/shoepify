import Nav from './components/Nav';
import Hero from './components/Hero';
import HeroDetails from './components/HeroDetails';
import styles from './CSS/All.module.css';
import { useState } from 'react';

function App() {
  const [totalInCart, setTotalInCart] = useState(0);

  return (
    <>
      <Nav totalInCart={totalInCart} setTotalInCart={setTotalInCart} />
      <div className={styles.sliderContainer}>
        <Hero />
        <HeroDetails setTotalInCart={setTotalInCart} />
      </div>
    </>
  );
}

export default App;
