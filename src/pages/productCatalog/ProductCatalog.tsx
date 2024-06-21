import { ProductCard } from "../../components/productCard/ProductCard";
import css from "./ProductCatalog.module.scss";
import { SubHeader } from "../../components/SubHeader/SubHeader";
import Napoleon from './images/Napoleon.jpg';
import Tsvitayskyi from './images/Tsvitaivskyi_pie.jpg';
import RedVelvet from './images/Red_velvet.jpg';
import CarrotCake from './images/Carrot_cake.jpg';
import PragueCake from './images/Prague_cake.jpg';
import CheezeCake from './images/Cheesecake_New_York.jpg';
import HoneyBee from './images/honey_bee.jpg';
import Basque from './images/Basque_cheesecake.jpg';
import Waffle from './images/Waffle_cake.jpg';
import Tart from './images/Tart_chocolate.jpg';
import Josephine from './images/Josephine.jpg';
import MrsValevska from './images/MrsValevska.jpg';

const cakses = [
  {
    id: 1,
    name: 'Наполеон',
    url: Napoleon,
    price: "500 UAH",
  },
  {
    id: 2,
    name: "Цвітаївський пиріг",
    url: Tsvitayskyi,
    price: "450 UAH",
  },
  {
    id: 3,
    name: "Червоний оксамит",
    url: RedVelvet,
    price: "800 UAH",
  },
  {
    id: 4,
    name: "Моркв’яний торт",
    url: CarrotCake,
    price: "500 UAH",
  },
  {
    id: 5,
    name: "Празький торт",
    url: PragueCake,
    price: "450 UAH",
  },
  {
    id: 6,
    name: "Чизкейн Нью-Йорк",
    url: CheezeCake,
    price: "800 UAH",
  },
  {
    id: 7,
    name: "Медовик",
    url: HoneyBee,
    price: "500 UAH",
  },
  {
    id: 8,
    name: "Баскський чизкейк",
    url: Basque,
    price: "550 UAH",
  },
  {
    id: 9,
    name: "Вафельний торт",
    url: Waffle,
    price: "800 UAH",
  },
  {
    id: 10,
    name: "Тарт шоколад",
    url: Tart,
    price: "500 UAH",
  },
  {
    id: 11,
    name: "Жосефіна",
    url: Josephine,
    price: "800 UAH",
  },
  {
    id: 12,
    name: "Пані Валевська",
    url: MrsValevska,
    price: "800 UAH",
  },
];

export const ProductCatalog: React.FC = () => {

  return (
    <>
      <SubHeader />
      <div className={css.container}>
        <div className={css.container_section_list}>
          <div className={css.product_list}>
            {cakses.map(cake => 
              <ProductCard key={cake.id} id={cake.id} name={cake.name} price={cake.price} url={cake.url} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

