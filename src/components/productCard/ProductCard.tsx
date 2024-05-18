import styles from './productCard.module.scss';

type Props = {
  name: string,
  price: string,
  url: string
}

export const ProductCard: React.FC<Props> = ({ name, price, url }) => {
  return (
    <li>
      <img src={url} alt="item_image" />
      <div className={styles.container_text}>
        <p className={styles.title_poduct}>{name}</p>
        <p className={styles.price_poduct}>{price}</p>
      </div>
      <a href="#prodact-view">
        Переглянути
      </a>
    </li>
  )
};