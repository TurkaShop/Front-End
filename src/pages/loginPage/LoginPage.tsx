import { NavLink } from 'react-router-dom';
import Registlogo from "../../images/registlogo.svg";
import lstyles from'./loginPage.module.scss';
import rstyles from '../registerPage/registerPage.module.scss';
import { useState } from 'react';

export const LoginPage = () => {
  const [rememberPassword, setRemember] = useState(true);

  return (
    <>
      {rememberPassword ? (
        <div className={rstyles.regist__page}>
          <div className={rstyles.regist__border}>
            <div className={rstyles.register}>
              <form action="" className={rstyles.regist__form}>
                <p className={rstyles.regist__title}>Особистий кабінет</p>
                <input type="text" placeholder='Ім’я' className={rstyles.regist__input} />
                <input type="text" placeholder='Пароль' className={rstyles.regist__input} />
                <button type='submit' className={rstyles.regist__button}>Увійти</button>
                <p className={lstyles.login__link} onClick={() => setRemember(false)}>Забули пароль?</p>
                <div className={lstyles.forgot__link}>
                <p className={rstyles.regist__link}>В мене немає аккаунту.</p>
                <NavLink to='/signup' className={rstyles.regist__link}>
                  <p className={`${rstyles.regist__link} ${lstyles.login__link__style}`}>Зареєструватися</p>
                </NavLink>
                </div>
              </form>
            </div>

            <div className={rstyles.regist__images}>
              <div className={rstyles.regist__dessert}>
                <img src={Registlogo} alt="Логотип" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={rstyles.regist__page}>
          <div className={rstyles.regist__border}>
            <div className={rstyles.register}>
              <form action="" className={rstyles.regist__form}>
                <p className={`${rstyles.regist__title} ${lstyles.forgot__title}`}>Забули пароль?</p>
                <p className={`${rstyles.regist__link} ${lstyles.forgot__title}`}>Ми надішлемо код підтвердження <br /> на вашу електронну пошту</p>
                <input type="text" placeholder='Введіть Вашу електронну адресу' className={rstyles.regist__input} />
                <button type='submit' className={rstyles.regist__button}>Надіслати код</button>
              </form>
            </div>

            <div className={rstyles.regist__images}>
              <div className={rstyles.regist__dessert}>
                <img src={Registlogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
};