import classes from './itemPage.module.scss';
import bigPhoto from '../../images/bigPhoto.jpg';
import smallPhoto1 from '../../images/smallPhoto1.jpg';
import smallPhoto2 from '../../images/smallPhoto2.jpg';
import RedVelvet from '../../images/main_page/our_desserts/red_cake.jpg';
import { useState } from 'react';
import { ProductCard } from '../../components/productCard/ProductCard';
import { SubHeader } from '../../components/SubHeader/SubHeader';
import Napoleon from '../../images/main_page/our_desserts/napoleon.jpg';
import Choco from '../../images/main_page/our_desserts/chokolate_sausage.jpg';

export const Itempage = () => {
  const [amountProduct, setAmountProduct] = useState(1);

  return (
    <>
      <SubHeader />
      <div className={classes.main}>
        <div className={classes.main__container}>
          <div className={classes.main__photos}>
            <div className={classes.main__bigPhoto}>
              <img src={bigPhoto} alt='big cake photo' />
            </div>

            <div className={classes.main__smallPhotos}>
              <div className={classes.main__smallPhoto}>
                <img src={smallPhoto1} alt='small photo 1' />
              </div>

              <div className={classes.main__smallPhoto}>
                <img src={smallPhoto2} alt='small photo 2' />
              </div>
            </div>
          </div>

          <div className={classes.form__container}>
            <form className={classes.form}>
              <p className={classes.form__title_product_view}>Червоний оксамит</p>
              <p className={classes.form__price_product_view}>500 UAH</p>

              <select name="select" required className={classes.form_select}>
                <option disabled selected>
                  Варіанти доставки
                </option>
                <option value="value1">Значення 1</option>
                <option value="value2">Значення 2</option>
                <option value="value3">Значення 3</option>
              </select>

              <select name="select" required className={classes.form_select}>
                <option disabled selected>
                  Діаметр
                </option>
                <option value="value1">Значення 1</option>
                <option value="value2">Значення 2</option>
                <option value="value3">Значення 3</option>
              </select>

              <select name="select" className={classes.form_select}>
                <option disabled selected>
                  Інгрідієнти
                </option>
                <option value="value1">Значення 1</option>
                <option value="value2">Значення 2</option>
                <option value="value3">Значення 3</option>
              </select>

              <select name="select" className={classes.form_select}>
                <option disabled selected>
                  Алергени
                </option>
                <option value="value1">Значення 1</option>
                <option value="value2">Значення 2</option>
                <option value="value3">Значення 3</option>
              </select>

              <select name="select" required className={classes.form_select}>
                <option disabled selected>
                  Доставка
                </option>
                <option value="value1">Значення 1</option>
                <option value="value2">Значення 2</option>
                <option value="value3">Значення 3</option>
              </select>

              <div className={classes.btn__container}>
                <div className={classes.btn__container_inner}>
                  <button
                    onClick={() => {
                      if (amountProduct === 1) {
                        return;
                      }
                      setAmountProduct(amountProduct - 1);
                    }}
                  >
                    -
                  </button>

                  <p>{amountProduct}</p>

                  <button
                    onClick={() => {
                      setAmountProduct(amountProduct + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className={classes.button__container}>
                <button type="submit" className={classes.btn__submit}>
                  Додати у кошик
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={classes.recomendations}>
        <div className={classes.recomendations_container}>
          <ProductCard id={1} name={'Червоний оксамит'} price={'500 UAH'} url={RedVelvet} />
          <ProductCard id={2} name={'Наполеон'} price={'500 UAH'} url={Napoleon} />
          <ProductCard id={3} name={'Шоколадна ковбаска'} price={'500 UAH'} url={Choco} />
        </div>
      </div>
    </>
  )
};
