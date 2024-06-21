import cstyles from'./contacts.module.scss';
import Telegram from "../../images/telegram.svg";
import Viber from "../../images/viber.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";
import InstLink from "../../images/instlink.svg";

export const Contacts = () => {
  return (
    <>
      <div className={cstyles.contacts__border}>

        <div className={cstyles.contacts}>
          <p className={cstyles.contacts__title}>Наші контакти</p>
          <p className={cstyles.contacts__text}>Контакти виробництва:</p>
          <p className={cstyles.contacts__description}>м. Київ, вул. Архітектора Ніколаєва, 7</p>
          <a href="tel:+380 67 594 73 73" className={cstyles.contacts__description}>+380 67 594 73 73</a>
          <a href="mailto:turkacaffee@gmail.com" className={cstyles.contacts__description}>turkacaffee@gmail.com</a>
          <div className={cstyles.contacts__link}>
            <a href=""><img src={Telegram} alt="Телеграм" /></a>
            <a href=""><img src={Viber} alt="Вайбер" /></a>
            <a href=""><img src={Instagram} alt="Инстаграм" /></a>
            <a href=""><img src={Facebook} alt="Фэйсбук" /></a>
          </div>
          <p className={cstyles.contacts__text}>Контакти фірмових кав’ярень:</p>
          <div className={cstyles.contacts__cafe}>
          <div>
              <p className={cstyles.contacts__description}>м. Київ, вул. Градинська, 3</p>
              <div className={cstyles.contacts__description}>
                <a href="tel:+380 67 984 64 34" >+380 67 984 64 34</a>
              </div>
              <p className={`${cstyles.contacts__description} ${cstyles.contacts__item}`}>Щодня з 9:00 по 21:00</p>
              <a href="" className={cstyles.instagram__link}><img src={InstLink} alt="Значок инстаграма" /><p>turka_caffee_</p></a>
          </div>
          <div>
              <p className={cstyles.contacts__description}>м. Київ, вул. Олеся Гончара, 74</p>
              <div className={cstyles.contacts__description}>
                <a href="tel:+380 97 780 53 57" >+380 97 780 53 57</a>
              </div>
              <p className={cstyles.contacts__description}>Пн-Чт, Нд з 9:00 по 20:00 <br/> Пт-Сб з 9:00 по 21:00</p>
              <a href="" className={cstyles.instagram__link}><img src={InstLink} alt="Значок инстаграма" /><p>turkanahonchara</p></a>
          </div>
          </div>
        </div>
        <div className={cstyles.contacts__map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12068.832882379771!2d30.57588651970302!3d50.512597573381264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d105f0904351%3A0xbea07337e5696bff!2z0KLRg9GA0LrQsCBjYWZmZWUg0YfQsNC50L3Qvi3QutCw0LLQvtCy0LjQuSDQsdGD0YLRltC6Lg!5e0!3m2!1sru!2sua!4v1715643377189!5m2!1sru!2sua" width="100%" height="100%"  loading="lazy"></iframe>
        </div>
      </div>
    </>
  )
};