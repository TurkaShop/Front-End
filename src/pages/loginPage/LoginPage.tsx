import { NavLink } from 'react-router-dom';
import Registlogo from "../../images/registlogo.svg";
import './loginPage.scss';

export const LoginPage = () => {
  return (
    <>
      <div className='regist__page'>
        <div className='regist__border'>
          <div className='register'>
            <form action="" className='regist__form'>
              <p className='regist__title'>Особистий кабінет</p>
              <input type="text" placeholder='Ім’я' className='regist__input' />
              <input type="text" placeholder='Пароль' className='regist__input' />
              <button type='submit' className='regist__button'>Увійти</button>
              <NavLink to='/' className='login__link'>Забули пароль?</NavLink>
              <NavLink to='/' className='regist__link'>В мене немає аккаунту. <p className='regist__link login__link__style'>Зареєструватися</p></NavLink>
            </form>
          </div>
          <div className='regist__images'>
            <div className='regist__dessert'>
              <img src={Registlogo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='regist__page'>
        <div className='regist__border'>
          <div className='register'>
            <form action="" className='regist__form'>
              <p className='regist__title forgot__title'>Забули пароль?</p>
              <p className='regist__link forgot__title'>Ми надішлемо код підтвердження <br /> на вашу електронну пошту</p>
              <input type="text" placeholder='Введіть Вашу електронну адресу' className='regist__input' />
              <button type='submit' className='regist__button'>Надіслати код</button>
            </form>
          </div>
          <div className='regist__images'>
            <div className='regist__dessert'>
              <img src={Registlogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};