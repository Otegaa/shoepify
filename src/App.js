import Nav from './components/Nav';
import Hero from './components/Hero';
import HeroDetails from './components/HeroDetails';
import CartInfo from './components/CartInfo';
import styles from './CSS/Hero.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalPrice } from './Redux/cart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(totalPrice());
  }, [amount]);

  return (
    <>
      <Nav />
      <div className={styles.sliderContainer}>
        <Hero />
        <HeroDetails />
      </div>
      <CartInfo />
    </>
  );
}

export default App;
