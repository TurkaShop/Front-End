import './workWithUs.scss';
import WorkSVGOne from "../../images/work_one.svg";
import WorkSVGTwo from "../../images/work_two.svg";
import WorkSVGThree from "../../images/work_three.svg";
import WorkSVGFour from "../../images/work_four.svg";

export const WorkWithUs = () => {
  return (
    <div>
      <div className='work__border'>
        <p className='work__title'>Співпраця з Turka Bakery</p>
        <p className='work__text'>Надійний HoReCa партнер</p>
        <div>
          <ul className='work__list'>
            <li className='work__item'>
              <img src={WorkSVGOne} alt="" />
              <p className='work__listtitle'>Власна логістика</p>
              <p className='work__listtext'>Прийом замовлень через <br /> сайт та своєчасна доставка <br /> 7 днів на тиждень</p>
            </li>
            <li className='work__item'>
              <img src={WorkSVGTwo} alt="" />
              <p className='work__listtitle'>НАССР</p>
              <p className='work__listtext'>Управління безпекою <br /> продукції згідно з <br /> принципами HACCP</p>
            </li>
            <li className='work__item'>
              <img src={WorkSVGThree} alt="" />
              <p className='work__listtitle'>Ваш Менеджер</p>
              <p className='work__listtext'>Консультації на кожному <br /> етапі співпраці і допомога з <br /> вибором асортименту</p>
            </li>
            <li className='work__item'>
              <img src={WorkSVGFour} alt="" />
              <p className='work__listtitle'>Інгредієнти</p>
              <p className='work__listtext'>Використовуємо тільки <br /> якісні інгредієнти від <br /> перевірених <br /> постачальників</p>
            </li>
          </ul>
        </div>
        
        <div className='work__formbackground'>
          <form action="" className='work__form'>
            <p className='regist__title forgot__title'>Хочете працювати з нами?</p>
            <p className='regist__link forgot__title'>Відправляйте заявку, а ми якнайшвидше <br /> зв`яжемося з вами та розповімо про всі деталі</p>
            <input type="text" placeholder='Ім’я' className='regist__input' />
            <input type="text" placeholder='Телефон' className='regist__input' />
            <button type='submit' className='regist__button'>Відправити</button>
          </form>
        </div>
      </div>
    </div>
  )
};