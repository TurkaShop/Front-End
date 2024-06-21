import rstyles from './registerPage.module.scss';
import Registlogo from "../../images/registlogo.svg";
import { NavLink } from 'react-router-dom';


export const RegisterPage = () => {
  return (
    <div className={rstyles.regist__page}>
      <div className={rstyles.regist__border}>
        <div className={rstyles.register}>
          <form action="" className={rstyles.regist__form}>
            <p className={rstyles.regist__title}>Реєстрація</p>
            <input type="text" placeholder='Ім’я' className={rstyles.regist__input} />
            <input type="text" placeholder='Електронна адреса' className={rstyles.regist__input} />
            <input type="text" placeholder='Пароль' className={rstyles.regist__input} />
            <input type="text" placeholder='Повторіть пароль' className={rstyles.regist__input} />
            <button type='submit' className={rstyles.regist__button}>Зареєструватися</button>
            <NavLink to='/signin' className={rstyles.regist__link}>У мене вже є аккаунт</NavLink>
          </form>
        </div>
        <div className={rstyles.regist__images}>
          <div className={rstyles.regist__dessert}>
            <img src={Registlogo} alt="Логотип" />
          </div>
        </div>
      </div>
    </div>
  )
};