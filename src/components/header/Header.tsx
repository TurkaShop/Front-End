// import './header.scss';
import css from "./header.module.scss";

export const Header = () => {
  return (
    <header className={css.header__container}>
      <div className={css.logo__img}>
        <a href="/">
          <img src="src/images/header/logo.svg" alt="logo" />
        </a>
      </div>
      <ul className={css.header__list}>
        <li className={css.header__text_item}>
          <a href="/">Торти</a>
        </li>
        <li className={css.header__text_item}>
          <a href="/">Випічка</a>
        </li>
        <li className={css.header__text_item}>
          <a href="/">Десерти</a>
        </li>
        <li className={css.header__text_item}>
          <a href="/">Контакти</a>
        </li>
      </ul>
      <ul className={css.header__icons}>
        <li className={css.header__icons_item}>
          <a href="/">
            <img src="src/images/header/gg_search.svg" />
          </a>
        </li>
        <li className={css.header__icons_item}>
          <a href="/">
            <img src="src/images/header/lets-icons_basket-alt-3-light.svg" />
          </a>
        </li>
        <li className={css.header__icons_item}>
          <a href="/">
            <img src="src/images/header/material-symbols_person-outline.svg" />
          </a>
        </li>
      </ul>
    </header>
  );
};
