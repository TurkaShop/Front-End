import './registerPage.scss';
import Registlogo from "../../images/registlogo.svg";
import { NavLink } from 'react-router-dom';


export const RegisterPage = () => {
  return (
    <div className='regist__page'>
      <div className='regist__border'>
        <div className='register'>
          <form action="" className='regist__form'>
            <p className='regist__title'>Реєстрація</p>
            <input type="text" placeholder='Ім’я' className='regist__input' />
            <input type="text" placeholder='Електронна адреса' className='regist__input' />
            <input type="text" placeholder='Пароль' className='regist__input' />
            <input type="text" placeholder='Повторіть пароль' className='regist__input' />
            <button type='submit' className='regist__button'>Зареєструватися</button>
            <NavLink to='/signin' className='regist__link'>У мене вже є аккаунт</NavLink>
          </form>
        </div>
        <div className='regist__images'>
          <div className='regist__dessert'>
            <img src={Registlogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
};