import { useSelector, useDispatch } from 'react-redux';
import { increaseItem, decreaseItem } from '../Redux/cart/cartSlice';
import styles from '../CSS/Hero.module.css';
import { PiShoppingCart } from 'react-icons/pi';

const HeroDetails = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.cart);

  return (
    <div className={styles.heroDetails}>
      <h3 className={styles.company}>Shoepify company</h3>
      <h2 className={styles.shoeAd}>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
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
          <button
            onClick={() => {
              if (amount < 1) return;
              dispatch(decreaseItem());
            }}
          >
            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                id="a"
                fill="#FF7E1B"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <p>{amount}</p>
          <button
            onClick={() => {
              dispatch(increaseItem());
            }}
          >
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
  );
};
export default HeroDetails;
