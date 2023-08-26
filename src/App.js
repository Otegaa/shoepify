import Nav from './components/Nav';
import Hero from './components/Hero';
import HeroDetails from './components/HeroDetails';
import CartInfo from './components/CartInfo';
import styles from './CSS/Hero.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalPrice } from './Redux/cart/cartSlice';

function App() {
  const [totalInCart, setTotalInCart] = useState(0);

  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(totalPrice());
  }, [amount, dispatch]);

  return (
    <>
      <Nav totalInCart={totalInCart} />
      <div className={styles.sliderContainer}>
        <Hero />
        <HeroDetails setTotalInCart={setTotalInCart} />
      </div>
      <CartInfo totalInCart={totalInCart} setTotalInCart={setTotalInCart} />
    </>
  );
}

export default App;
