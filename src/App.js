import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HeroDetails from './components/HeroDetails';
import styles from './CSS/All.module.css';
import ShoeOverview from './components/ShoeOverview';

function App() {
  const [totalInCart, setTotalInCart] = useState(0);

  return (
    <>
      <Nav totalInCart={totalInCart} setTotalInCart={setTotalInCart} />
      <div className={styles.sliderContainer}>
        <Hero />
        <HeroDetails setTotalInCart={setTotalInCart} />
      </div>
      <ShoeOverview />
    </>
  );
}

export default App;
