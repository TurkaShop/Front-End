import { useState } from "react";
import { ProductCard } from "../../components/productCard/ProductCard";
import css from "./ProductCatalog.module.scss";

const cakses = [
  {
    id: 1,
    name: "Наполеон",
    url: "src/pages/productCatalog/images/Frame56.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Наполеон",
    url: "src/pages/productCatalog/images/Frame56.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Наполеон",
    url: "src/pages/productCatalog/images/Frame56.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Наполеон",
    url: "src/pages/productCatalog/images/Frame56.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Наполеон",
    url: "src/pages/productCatalog/images/Frame56.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Наполеон",
    url: "src/pages/productCatalog/images/Frame56.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Наполеон",
    url: "src/pages/productCatalog/images/Frame56.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Наполеон",
    url: "src/pages/productCatalog/images/Frame56.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Наполеон",
    url: "src/pages/productCatalog/images/Frame56.jpg",
    price: "500 UAH",
  },
  {
    id: 1,
    name: "Наполеон",
    url: "src/pages/productCatalog/images/Frame56.jpg",
    price: "500 UAH",
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
                  src="src/pages/productCatalog/images/Frame98.jpg"
                  alt="cakes"
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
                  src="src/pages/productCatalog/images/Frame98.jpg"
                  alt="cakes"
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
                  src="src/pages/productCatalog/images/Frame98.jpg"
                  alt="cakes"
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
                  src="src/pages/productCatalog/images/Frame98.jpg"
                  alt="cakes"
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
                  src="src/pages/productCatalog/images/Frame98.jpg"
                  alt="cakes"
                />
                <p>Класичні торти</p>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div className={css.container}>
        <div className={css.container_section_list}>
          <ul className={css.product_list}>
            {cakses.map((cake) => (
              <ProductCard
                key={cake.id}
                name={cake.name}
                price={cake.price}
                url={cake.url}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
