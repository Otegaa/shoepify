import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HeroDetails from './components/HeroDetails';
import sharedStyles from './CSS/Shared.module.css';
import { useLocalStorageState } from './components/useLocalStorageState';

function App() {
  const [totalInCart, setTotalInCart] = useLocalStorageState(0, 'shoe');
  const [isCartClicked, setIsCartClicked] = useState(false);

  return (
    <>
      <Nav
        totalInCart={totalInCart}
        setTotalInCart={setTotalInCart}
        isCartClicked={isCartClicked}
        setIsCartClicked={setIsCartClicked}
      />
      <div className={sharedStyles.sliderContainer}>
        <Hero setIsCartClicked={setIsCartClicked} />
        <HeroDetails setTotalInCart={setTotalInCart} />
      </div>
    </>
  );
}

export default App;
