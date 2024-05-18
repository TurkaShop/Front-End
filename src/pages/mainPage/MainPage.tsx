// import "./mainPage.scss";
import { ProductCard } from "../../components/productCard/ProductCard";
import css from "./mainPage.module.scss";

export const MainPage: React.FC = () => {
  return (
    <main>
      <section className={`${css.hero} ${css.container}`}>
        <div className={css.hero__content}>
          <div className={css.hero__text}>
            <img src="src/images/main_page/hi_sweety.svg" alt="hi, sweety" />
            {/* <p className={css.welcome__text}>
              привіт, <p>мій солоденький</p>
            </p> */}
            <p className={css.hero__btn_container}>
              <a href="/">
                <button className={css.hero__btn}>Спробувати найкраще</button>
              </a>
            </p>
          </div>
          <ul className={css.slider}>
            <li className={css.dot__items}></li>
            <li className={css.dot__items}></li>
            <li className={css.dot__items}></li>
          </ul>
          <div className={css.icons__links}>
            <a href="/">
              <img
                src="src/images/main_page/icons/basil_viber-solid.svg"
                alt="viber"
                className={css.icon__item}
              />
            </a>
            <a href="/">
              <img
                src="src/images/main_page/icons/bi_instagram.svg"
                alt="instagram"
                className={css.icon__item}
              />
            </a>
            <a href="/">
              <img
                src="src/images/main_page/icons/simple-icons_telegram.svg"
                alt="telegram"
                className={css.icon__item}
              />
            </a>
          </div>
        </div>
      </section>
      <section className={css.our__goods}>
        <p className={css.main__text}>Наші товари</p>
        <p className={css.second__text}>
          Вже більше 10 років Tyrka Bakery робить вашу улюблену випічку з нуля,
          невеликими партіями та з використанням найкращих інгредієнтів.
        </p>
        <button className={css.goods__btn}>
          <p className={css.third__text}>Дивитись більше</p>
        </button>
      </section>
      <section className={css.categories}>
        <ul className={css.categories__list}>
          <li className={css.categories__item}>
            <a href="/">
              <img
                src="src/images/main_page/categories/cakes.png"
                alt="cakes"
                className={css.categories__img}
              />
            </a>
            <a>
              <p className={css.categories__item_text}>Торти</p>
            </a>
          </li>
          <li className={css.categories__item}>
            <a href="/">
              <img
                src="src/images/main_page/categories/baking.png"
                alt="Baking"
                className={css.categories__img}
              />
            </a>
            <p className={css.categories__item_text}>Випічка</p>
          </li>
          <li className={css.categories__item}>
            <a href="/">
              <img
                src="src/images/main_page/categories/desserts.png"
                alt="Desserts"
                className={css.categories__img}
              />
            </a>
            <p className={css.categories__item_text}>Десерти</p>
          </li>
        </ul>
      </section>
      <section className={css.our_desserts}>
        <img
          src="src/images/main_page/our_desserts/dab_1.png"
          alt="dab_img"
          className={css.dab__img}
        />
        <p className={css.main__text}>Наші десерти</p>
        <ul className={css.desserts__list}>
          <ProductCard
            name="Наполеон"
            price="500 UAH"
            url="src/images/main_page/our_desserts/napoleon.jpg"
          />
          <ProductCard
            name="Наполеон"
            price="1000 UAH"
            url="src/images/main_page/our_desserts/chokolate_sausage.jpg"
          />
          <ProductCard
            name="Наполеон"
            price="1000 UAH"
            url="src/images/main_page/our_desserts/red_cake.jpg"
          />
          <ProductCard
            name="Наполеон"
            price="1000 UAH"
            url="src/images/main_page/our_desserts/cheese_cake.jpg"
          />
          <ProductCard
            name="Наполеон"
            price="1000 UAH"
            url="src/images/main_page/our_desserts/medovik.jpg"
          />
          <ProductCard
            name="Наполеон"
            price="1000 UAH"
            url="src/images/main_page/our_desserts/praga.jpg"
          />
        </ul>
      </section>
    </main>
  );
};
