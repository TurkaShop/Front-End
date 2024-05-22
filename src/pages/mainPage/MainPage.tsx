import css from "./mainPage.module.scss";
export const MainPage = () => {
  return (
    <div className={css.aboutus}>
      <div className={css.counter__container}>
        <div className={css.counter__years}>
          <p className={css.counter__numbers}>8+</p>
          <p className={css.counter__names}>Років</p>
        </div>

        <div className={css.counter__clients}>
          <p className={css.counter__numbers}>20K+</p>
          <p className={css.counter__names}>Клієнтів</p>
        </div>

        <div className={css.counter__dessert}>
          <p className={css.counter__numbers}>500+</p>
          <p className={css.counter__names}>Десертів</p>
        </div>
      </div>
      <div className={css.aboutus__text_block}>
        <p className={css.aboutus__subject}>Хочете дізнатися більше про нас?</p>
        <a href="index.html" className={css.aboutus__link}>
          Дізнатись Більше
        </a>
      </div>
    </div>
  );
};
