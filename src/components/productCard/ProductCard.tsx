import { NavLink } from 'react-router-dom';
import styles from './productCard.module.scss';

type Props = {
  id: number,
  name: string,
  price: string,
  url: string
}

export const ProductCard: React.FC<Props> = ({id, name, price, url }) => {
  return (
      <div className={styles.card}>
        <img src={url} alt="item_image" className={styles.image} />
        <div className={styles.container_text}>
          <p className={styles.title_poduct}>{name}</p>
          <p className={styles.price_poduct}>{price}</p>
        </div>
        <NavLink to={`/${id}`} className={styles.item_button}>
          Переглянути
        </NavLink>
      </div>
      <a href="#prodact-view" className={styles.item_button}>
        Переглянути
      </a>
  );
};
