import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);

    const cartItemsCounter = cartContext.items.reduce((acum, item) => {
        return acum + item.amount;
    }, 0);

    return <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Cart</span>
        <span className={styles.badge}>{cartItemsCounter}</span>
    </button>;
};

export default HeaderCartButton;