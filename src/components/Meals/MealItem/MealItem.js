import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ meal }) => {
    const cartContext = useContext(CartContext);
    const formattedPrice = `$${meal.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: meal.id,
            name: meal.name,
            price: meal.price,
            amount: amount
        });
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{meal.name}</h3>
                <div className={styles.description}>{meal.description}</div>
                <div className={styles.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;