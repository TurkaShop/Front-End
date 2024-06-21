// import "./mainPage.scss";
import { ProductCard } from "../../components/productCard/ProductCard";
import css from "./mainPage.module.scss";
import Sweety from '../../images/main_page/hi_sweety.svg';
import Sweety2 from '../../images/main_page/hi_sweety2.svg';
import Viber from '../../images/main_page/icons/basil_viber-solid.svg';
import Instagram from '../../images/main_page/icons/bi_instagram.svg';
import Telegram from '../../images/main_page/icons/simple-icons_telegram.svg';
import Cakes from '../../images/main_page/categories/cakes.png';
import Baking from '../../images/main_page/categories/baking.png';
import Desserts from '../../images/main_page/categories/desserts.png';
import DabImg from '../../images/main_page/our_desserts/dab_1.png';
import DabImg2 from '../../images/main_page/our_desserts/dab_mobile.svg';
import { NavLink } from "react-router-dom";
import Napoleon from '../../images/main_page/our_desserts/napoleon.jpg';
import Choco from '../../images/main_page/our_desserts/chokolate_sausage.jpg';
import RedVelvet from '../../images/main_page/our_desserts/red_cake.jpg';
import CheezeCake from '../../images/main_page/our_desserts/cheese_cake.jpg';
import Medovik from '../../images/main_page/our_desserts/medovik.jpg';
import Praga from '../../images/main_page/our_desserts/praga.jpg';

export const MainPage: React.FC = () => {
  return (
    <main>
      <section className={`${css.hero} ${css.container}`}>
        <div className={css.hero__content}>
          <div className={css.hero__text}>
            <img
              src={Sweety}
              alt="hi, sweety"
              className={css.hero__img}
            />
            <div className={css.sweety__mobile}>
              <img
                src={Sweety2}
                alt="hi, sweety"
                className={css.hero__img_mobile}
              />
            </div>
            {/* <p className={css.welcome__text}>
              привіт, <p>мій солоденький</p>
            </p> */}
            {/* <div className={css.welcome__text}></div> */}
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
                src={Viber}
                alt="viber"
                className={css.icon__item}
              />
            </a>
            
            <a href="/">
              <img
                src={Instagram}
                alt="instagram"
                className={css.icon__item}
              />
            </a>

            <a href="/">
              <img
                src={Telegram}
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
            <NavLink to={'/cakes'}>
              <img
                src={Cakes}
                alt="cakes"
                className={css.categories__img}
              />
            </NavLink>

            <a>
              <p className={css.categories__item_text}>Торти</p>
            </a>
          </li>

          <li className={css.categories__item}>
            <NavLink to={'/bakery'}>
              <img
                src={Baking}
                alt="Baking"
                className={css.categories__img}
              />
            </NavLink>
            <p className={css.categories__item_text}>Випічка</p>
          </li>

          <li className={css.categories__item}>
            <NavLink to={'/desserts'}>
              <img
                src={Desserts}
                alt="Desserts"
                className={css.categories__img}
              />
            </NavLink>
            <p className={css.categories__item_text}>Десерти</p>
          </li>
        </ul>
      </section>

      <section className={css.our_desserts}>
        <img
          src={DabImg}
          alt="dab_img"
          className={css.dab__img}
        />

        <img
          src={DabImg2}
          alt="dab image"
          className={css.dab__img_mobile}
        />

        <p className={css.main__text}>Наші десерти</p>

        <ul className={css.desserts__list}>
          <ProductCard
            id={1}
            name="Наполеон"
            price="500 UAH"
            url={Napoleon}
          />
          <ProductCard
            id={2}
            name="Шоколадна ковбаска"
            price="1000 UAH"
            url={Choco}
          />
          <ProductCard
            id={3}
            name="Червоний оксамит"
            price="1000 UAH"
            url={RedVelvet}
          />
          <ProductCard
            id={4}
            name="Чизкейк Нью-Йорк"
            price="1000 UAH"
            url={CheezeCake}
          />
          <ProductCard
            id={5}
            name="Медовик"
            price="1000 UAH"
            url={Medovik}
          />
          <ProductCard
            id={6}
            name="Празький"
            price="1000 UAH"
            url={Praga}
          />
        </ul>
      </section>

      <div className={css.aboutus}>
        <div className={css.counter__container}>
          <div className={css.counter__years}>
            <p className={css.counter__numbers}>8+</p>
            <p className={css.counter__names}>Років</p>
          </div>

          <div className={css.counter__clients}>
            <p className={css.counter__numbers}>20K+</p>
            <p className={css.counter__names}>Клієнтів</p>
          </div>

          <div className={css.counter__dessert}>
            <p className={css.counter__numbers}>500+</p>
            <p className={css.counter__names}>Десертів</p>
          </div>
        </div>

        <div className={css.aboutus__text_block}>
          <p className={css.aboutus__subject}>
            Хочете дізнатися більше про нас?
          </p>
          <a href="index.html" className={css.aboutus__link}>
            <p>Дізнатись Більше</p>
          </a>
        </div>
      </div>
    </main>
  );
};
