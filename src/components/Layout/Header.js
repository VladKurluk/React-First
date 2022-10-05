import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Japan Food</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={ sushiImage } alt="Food" />
            </div>
        </>
    );
};

export default Header;