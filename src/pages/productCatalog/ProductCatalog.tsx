import { useState } from "react";
import { ProductCard } from "../../components/productCard/ProductCard";
import css from "./ProductCatalog.module.scss";

const cakses = [
  {
    id: 1,
    name: "Наполеон",
    url: "src/pages/productCatalog/images/Napoleon.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Цвітаївський пиріг",
    url: "src/pages/productCatalog/images/Tsvitaivskyi_pie.jpg",
    price: "450 UAH",
  },
  {
    id: 1,
    name: "Червоний оксамит",
    url: "src/pages/productCatalog/images/Red_velvet.jpg",
    price: "800 UAH",
  },
  {
    id: 1,
    name: "Моркв’яний торт",
    url: "src/pages/productCatalog/images/Carrot_cake.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Празький торт",
    url: "src/pages/productCatalog/images/Prague_cake.jpg",
    price: "450 UAH",
  },
  {
    id: 1,
    name: "Чизкейн Нью-Йорк",
    url: "src/pages/productCatalog/images/Cheesecake_New_York.jpg",
    price: "800 UAH",
  },
  {
    id: 1,
    name: "Медовик",
    url: "src/pages/productCatalog/images/honey_bee.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Баскський чизкейк",
    url: "src/pages/productCatalog/images/Basque_cheesecake.jpg",
    price: "550 UAH",
  },
  {
    id: 1,
    name: "Вафельний торт",
    url: "src/pages/productCatalog/images/Waffle_cake.jpg",
    price: "800 UAH",
  },
  {
    id: 1,
    name: "Тарт шоколад",
    url: "src/pages/productCatalog/images/Tart_chocolate.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Жосефіна",
    url: "src/pages/productCatalog/images/Josephine.jpg",
    price: "800 UAH",
  },
  {
    id: 1,
    name: "Пані Валевська",
    url: "src/pages/productCatalog/images/MrsValevska.jpg",
    price: "800 UAH",
  },
];

export const ProductCatalog: React.FC = () => {
  const [flagCatalog, setFlagCatalog] = useState(false);

  return (
    <>
      <div className={`${css.container} ${css.container_product_catalog}`}>
        <div className={css.container_section_catalog}>
          <ul className={css.catalog_list}>
            <li
              onClick={() => {
                setFlagCatalog(true);
              }}
            >
              <label className={css.catalog_list_label}>
                <input
                  type="checkbox"
                  className={`${flagCatalog && css.catalog_list_input}`}
                />
                <img
                  src="src/pages/productCatalog/images-catalog/Biscuit_cakes.jpg"
                  alt="Бісквітні торти"
                />
                <p>Бісквітні торти</p>
              </label>
            </li>
            <li
              onClick={() => {
                setFlagCatalog(true);
              }}
            >
              <label className={css.catalog_list_label}>
                <input
                  type="checkbox"
                  className={`${flagCatalog && css.catalog_list_input}`}
                />
                <img
                  src="src/pages/productCatalog/images-catalog/Company_cakes.jpg"
                  alt="Фірмові торти"
                />
                <p>Фірмові торти</p>
              </label>
            </li>
            <li
              className={css.catalog_third_item}
              onClick={() => {
                setFlagCatalog(true);
              }}
            >
              <label className={css.catalog_list_label}>
                <input
                  type="checkbox"
                  className={`${flagCatalog && css.catalog_list_input}`}
                />
                <img
                  src="src/pages/productCatalog/images-catalog/Cheesecakes.jpg"
                  alt="Чізкейки"
                />
                <p>Чізкейки</p>
              </label>
            </li>
            <li
              onClick={() => {
                setFlagCatalog(true);
              }}
            >
              <label className={css.catalog_list_label}>
                <input
                  type="checkbox"
                  className={`${flagCatalog && css.catalog_list_input}`}
                />
                <img
                  src="src/pages/productCatalog/images-catalog/Chocolate.jpg"
                  alt="Шоколадні"
                />
                <p>Шоколадні</p>
              </label>
            </li>
            <li
              onClick={() => {
                setFlagCatalog(true);
              }}
            >
              <label className={css.catalog_list_label}>
                <input
                  type="checkbox"
                  className={`${flagCatalog && css.catalog_list_input}`}
                />
                <img
                  src="src/pages/productCatalog/images-catalog/Classic_cakes.jpg"
                  alt="Класичні торти"
                />
                <p>Класичні торти</p>
              </label>
            </li>
          </ul>
        </div>
      </div>

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

