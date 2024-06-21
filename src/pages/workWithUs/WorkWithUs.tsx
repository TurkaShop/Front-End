import wstyles from './workWithUs.module.scss';
import lstyles from'../loginPage/loginPage.module.scss';
import rstyles from '../registerPage/registerPage.module.scss';
import WorkSVGOne from "../../images/work_one.svg";
import WorkSVGTwo from "../../images/work_two.svg";
import WorkSVGThree from "../../images/work_three.svg";
import WorkSVGFour from "../../images/work_four.svg";



export const WorkWithUs = () => {
  return (
    <div>
      <div className={wstyles.work__border}>
        <p className={wstyles.work__title}>Співпраця з Turka Bakery</p>
        <p className={wstyles.work__text}>Надійний HoReCa партнер</p>
        <div>
          <ul className={wstyles.work__list}>
            <li className={wstyles.work__item}>
              <img src={WorkSVGOne} alt="Значок машины" />
              <p className={wstyles.work__listtitle}>Власна логістика</p>
              <p className={wstyles.work__listtext}>Прийом замовлень через <br /> сайт та своєчасна доставка <br /> 7 днів на тиждень</p>
            </li>
            <li className={wstyles.work__item}>
              <img src={WorkSVGTwo} alt="Значок щита" />
              <p className={wstyles.work__listtitle}>НАССР</p>
              <p className={wstyles.work__listtext}>Управління безпекою <br /> продукції згідно з <br /> принципами HACCP</p>
            </li>
            <li className={wstyles.work__item}>
              <img src={WorkSVGThree} alt="Значок менеджера" />
              <p className={wstyles.work__listtitle}>Ваш Менеджер</p>
              <p className={wstyles.work__listtext}>Консультації на кожному <br /> етапі співпраці і допомога з <br /> вибором асортименту</p>
            </li>
            <li className={wstyles.work__item}>
              <img src={WorkSVGFour} alt="Значок пшеницы" />
              <p className={wstyles.work__listtitle}>Інгредієнти</p>
              <p className={wstyles.work__listtext}>Використовуємо тільки <br /> якісні інгредієнти від <br /> перевірених <br /> постачальників</p>
            </li>
          </ul>
        </div>
        
        <div className={wstyles.work__formbackground}>
          <form action="" className={wstyles.work__form}>
            <p className={`${rstyles.regist__title} ${lstyles.forgot__title}`}>Хочете працювати з нами?</p>
            <p className={`${rstyles.regist__link} ${lstyles.forgot__title}`}>Відправляйте заявку, а ми якнайшвидше <br /> зв`яжемося з вами та розповімо про всі деталі</p>
            <input type="text" placeholder='Ім’я' className={rstyles.regist__input} />
            <input type="text" placeholder='Телефон' className={rstyles.regist__input} />
            <button type='submit' className={rstyles.regist__button}>Відправити</button>
          </form>
        </div>
      </div>
    </div>
  )
};