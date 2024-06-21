import css from "./footer.module.scss";
import InstaIcon from "../../images/instaicon.svg";
import LocationIcon from "../../images/locationicon.svg";
import PhoneIcon from "../../images/phoneicon.svg";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className={css.footer}>
        <div className={css.footer__block}>
          <div className={css.footer__logo}></div>

          <div className={css.menu}>
            <ul className={css.menu__list_left}>
              <p className={css.footer__subjects}>Меню</p>
              <li className={css.menu__item}>
                <NavLink to={'/cakes'} className={css.footer__link}>
                  Торти
                </NavLink>
              </li>

              <li className={css.menu__item}>
                <NavLink to={'/bakery'} className={css.footer__link}>
                  Випічка
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={css.about}>
            <ul className={css.menu__list_middle}>
              <p className={css.footer__subjects}>Про нас</p>
              <li className={css.about__item}>
                <a href="index.html" className={css.footer__link}>
                  Оферта
                </a>
              </li>

              <li className={css.about__item}>
                <NavLink to={'/workwithus'} className={css.footer__link}>
                  Співпраця
                </NavLink>
              </li>

              <li className={css.about__item}>
                <a href="index.html" className={css.footer__link}>
                  Статті
                </a>
              </li>
            </ul>
          </div>

          <div className={css.forcustomers}>
            <ul className={css.menu__list_right}>
              <p className={css.footer__subjects}>Покупцям</p>
              <li className={css.forcustomers__item}>
                <NavLink to={'contacts'} className={css.footer__link}>
                  Контакти
                </NavLink>
              </li>

              <li className={css.forcustomers__item}>
                <a href="index.html" className={css.footer__link}>
                  Доставка
                </a>
              </li>
            </ul>
          </div>

          <div className={css.contacts}>
            <ul className={css.contacts__list}>
              <p className={css.work__time}>Щодня з 9:00 до 21:00</p>
              <li className={css.contacts__item}>
                <img
                  className={css.menu__icon}
                  src={InstaIcon}
                  alt="instagram-icon"
                />
                <a
                  href="https://www.instagram.com/turka_caffee_/"
                  className={css.contacts__link}
                >
                  turka_caffee_
                </a>
              </li>

              <li className={css.contacts__item}>
                <img
                  className={css.menu__icon}
                  src={PhoneIcon}
                  alt="Phone-icon"
                />
                <a href="tel:+380679846434" className={css.contacts__link}>
                  +380 67 984 64 34
                </a>
              </li>

              <li className={css.contacts__item}>
                <img
                  className={css.menu__icon}
                  src={LocationIcon}
                  alt="location-icon"
                />
                <a
                  href="https://bit.ly/3wCMSdt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contacts__link"
                >
                  Вул. Градинська 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
