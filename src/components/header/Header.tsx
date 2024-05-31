// import './header.scss';
import { NavLink } from "react-router-dom";
import css from "./header.module.scss";

export const Header = () => {
  return (
    <header className={css.header__container}>
      <div className={css.logo__img}>
        <NavLink to="/">
          <img src="src/images/header/logo.svg" alt="logo" />
        </NavLink>
      </div>
      <ul className={css.header__list}>
        <NavLink to="/cakes" className={css.header__text_item}>
          <div className={css.item__width}>
            <p className={css.header__text}>Торти</p>
          </div>
        </NavLink>

        <NavLink to="/cakes" className={css.header__text_item}>
          <div className={css.item__width}>
            <p className={css.header__text}>Випічка</p>
          </div>
        </NavLink>

        <NavLink to="/cakes" className={css.header__text_item}>
          <div className={css.item__width}>
            <p className={css.header__text}>Десерти</p>
          </div>
        </NavLink>

        <NavLink to="/contacts" className={css.header__text_item}>
          <div className={css.item__width}>
            <p className={css.header__text}>Контакти</p>
          </div>
        </NavLink>
      </ul>
      <ul className={css.header__icons}>
        <a href="/" className={`${css.header__icons_item} ${css.header__loup}`}>
          <li>{/* <img src="src/images/header/gg_search.svg" /> */}</li>
        </a>
        <a href="/" className={`${css.header__icons_item} ${css.header__cart}`}>
          <li>
            {/* <img src="src/images/header/lets-icons_basket-alt-3-light.svg" /> */}
          </li>
        </a>
        <a
          href="/"
          className={`${css.header__icons_item} ${css.header__login}`}
        >
          <li>
            {/* <img src="src/images/header/material-symbols_person-outline.svg" /> */}
          </li>
        </a>
      </ul>
      <NavLink to="/" className={css.burger}>
        <img
          src={"src/images/header/burger.svg"}
          alt="burger menu"
          className={css.burger__img}
        />
      </NavLink>
    </header>
  );
};
