import { useSelector } from 'react-redux';
import styles from '../CSS/CartInfo.module.css';
import cartImg from '../assets/images/image-product-1-thumbnail.jpg';

const CartInfo = ({ totalInCart, setTotalInCart, setIsCartClicked }) => {
  const { price } = useSelector((store) => store.cart);

  const handleClearCart = () => {
    setTotalInCart(0);
  };

  const handleCloseCart = () => {
    setIsCartClicked(false);
  };

  return (
    <div className={styles.cartItemsContainer}>
      <div className={styles.cartBox}>
        <div className={styles.cartHeadingBox}>
          <button className={styles.closeCartBtn} onClick={handleCloseCart}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
              />
            </svg>
          </button>

          <div className={styles.cartTitle}>
            <h3>Cart</h3>
          </div>
        </div>
        <div className={styles.cartInfo}>
          {totalInCart < 1 ? (
            <p className={styles.emptyCart}>Your cart is empty.</p>
          ) : (
            <div className={styles.fullCart}>
              <div className={styles.fullCartInfo}>
                <img src={cartImg} alt="shoe in cart" />
                <div className={styles.fullCartInfoText}>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    ${price.toFixed(2)} x {totalInCart}{' '}
                    <span>${(totalInCart * 125).toFixed(2)}</span>
                  </p>
                </div>
                <div className={styles.fullCartInfoBin}>
                  <button onClick={handleClearCart}>
                    <svg
                      width="14"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#C3CAD9"
                      fillRule="nonzero"
                    >
                      <path
                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                        id="a"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <button className={styles.checkoutBtn}>Checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CartInfo;
