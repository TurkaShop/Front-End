import './productCatalog.scss';
import css from "./ProductCatalog.module.css";
import { useState } from 'react';

export const ProductCatalog = () => {
  
  const [descriptionToogle, setDescriptionToogle] = useState(false);
  const [amountProduct,setAmountProduct] = useState(1);
  const handleClick = ()=> {
    setDescriptionToogle(true)

  }

  return (
   <>
   <div className={`${css.container} ${css.container_product_catalog}`}>
    <div className={css.container_section_catalog}>
    <ul className={css.catalog_list}>
    <li>
      <img src="src/pages/productCatalog/images/Frame98.jpg" alt="cakes" />
      <p>Бісквітні торти</p>
    </li>
    <li>
    <img src="src/pages/productCatalog/images/Frame98.jpg" alt="cakes" />
    <p>Фірмові торти</p>
    </li>
    <li>
    <img src="src/pages/productCatalog/images/Frame98.jpg" alt="cakes" />
    <p>Чізкейки</p>
    </li>
    <li>
    <img src="src/pages/productCatalog/images/Frame98.jpg" alt="cakes" />
    <p>Шоколадні</p>
    </li>
    <li>
    <img src="src/pages/productCatalog/images/Frame98.jpg" alt="cakes" />
    <p>Класичні торти</p>
    </li>
    </ul>
    </div>
   </div>


   {descriptionToogle && (
   <div className={css.container} id='prodact-view'>
   <div className={`${css.container_section_list} ${css.container_product_view}`}>
    <div className={css.container_img}>
    <img src="src/pages/productCatalog/images/photo.jpg" alt="" />
    <img src="src/pages/productCatalog/images/photo (1).jpg" alt="" />
    <img src="src/pages/productCatalog/images/photo (2).jpg" alt="" />
    </div>
    <div className={css.container_form} >
    <form action="" className={css.form}>
    <p className={css.title_product_view}>Червоний оксамит</p>
    <p className={css.price_product_view}>500 UAH</p>

    <select name="select"  required className={css.form_select}>
    <option disabled selected >Варіанти доставки</option>
    <option value="value1">Значення 1</option>
    <option value="value2" >Значення 2</option>
    <option value="value3">Значення 3</option>
    </select>
    <select name="select"  required className={css.form_select}>
    <option disabled selected >Діаметр</option>
    <option value="value1">Значення 1</option>
    <option value="value2" >Значення 2</option>
    <option value="value3">Значення 3</option>
    </select>
    <select name="select"  className={css.form_select}>
    <option disabled selected >Інгрідієнти</option>
    <option value="value1">Значення 1</option>
    <option value="value2" >Значення 2</option>
    <option value="value3">Значення 3</option>
    </select>
    <select name="select"   className={css.form_select}>
    <option disabled selected >Алергени</option>
    <option value="value1">Значення 1</option>
    <option value="value2" >Значення 2</option>
    <option value="value3">Значення 3</option>
    </select>
    <select name="select"  required className={css.form_select}>
    <option disabled selected >Доставка</option>
    <option value="value1">Значення 1</option>
    <option value="value2" >Значення 2</option>
    <option value="value3">Значення 3</option>
    </select>
    <div className={css.container_btn}>
      <button onClick={()=>{if(amountProduct===1){return}setAmountProduct(amountProduct-1)}}>-</button>
      <p>{amountProduct}</p>
      <button onClick={()=>{setAmountProduct(amountProduct+1)}}>+</button>
    </div>
    <button type='submit' className={css.btn_submit}>Додати у кошик</button>
    </form>

    </div>
   </div>
   </div>)}


   <div className={css.container}>
    <div className={css.container_section_list}>
      <ul className={css.product_list}>
        <li>
          <img src="src/pages/productCatalog/images/Frame56.jpg" alt="" />
          <div className={css.container_text}>
            <p className={css.title_poduct}>Наполеон</p>
            <p className={css.price_poduct}>500 UAH</p>
          </div>
          <a href='#prodact-view' onClick={handleClick}>Переглянути</a>
          </li>
          <li>
          <img src="src/pages/productCatalog/images/Frame56.jpg" alt="" />
          <div className={css.container_text}>
            <p className={css.title_poduct}>Наполеон</p>
            <p className={css.price_poduct}>500 UAH</p>
          </div>
          <a href='#prodact-view' onClick={handleClick}>Переглянути</a>
          </li>
          <li>
          <img src="src/pages/productCatalog/images/Frame56.jpg" alt="" />
          <div className={css.container_text}>
            <p className={css.title_poduct}>Наполеон</p>
            <p className={css.price_poduct}>500 UAH</p>
          </div>
          <a href='#prodact-view' onClick={handleClick}>Переглянути</a>
          </li>
          <li>
          <img src="src/pages/productCatalog/images/Frame56.jpg" alt="" />
          <div className={css.container_text}>
            <p className={css.title_poduct}>Наполеон</p>
            <p className={css.price_poduct}>500 UAH</p>
          </div>
          <a href='#prodact-view' onClick={handleClick}>Переглянути</a>
          </li>
          <li>
          <img src="src/pages/productCatalog/images/Frame56.jpg" alt="" />
          <div className={css.container_text}>
            <p className={css.title_poduct}>Наполеон</p>
            <p className={css.price_poduct}>500 UAH</p>
          </div>
          <a href='#prodact-view' onClick={handleClick}>Переглянути</a>
          </li>
          <li>
          <img src="src/pages/productCatalog/images/Frame56.jpg" alt="" />
          <div className={css.container_text}>
            <p className={css.title_poduct}>Наполеон</p>
            <p className={css.price_poduct}>500 UAH</p>
          </div>
          <a href='#prodact-view' onClick={handleClick}>Переглянути</a>
          </li>
          <li>
          <img src="src/pages/productCatalog/images/Frame56.jpg" alt="" />
          <div className={css.container_text}>
            <p className={css.title_poduct}>Наполеон</p>
            <p className={css.price_poduct}>500 UAH</p>
          </div>
          <a href='#prodact-view' onClick={handleClick}>Переглянути</a>
          </li>
          <li>
          <img src="src/pages/productCatalog/images/Frame56.jpg" alt="" />
          <div className={css.container_text}>
            <p className={css.title_poduct}>Наполеон</p>
            <p className={css.price_poduct}>500 UAH</p>
          </div>
          <a href='#prodact-view' onClick={handleClick}>Переглянути</a>
          </li>
          <li>
          <img src="src/pages/productCatalog/images/Frame56.jpg" alt="" />
          <div className={css.container_text}>
            <p className={css.title_poduct}>Наполеон</p>
            <p className={css.price_poduct}>500 UAH</p>
          </div>
          <a href='#prodact-view' onClick={handleClick}>Переглянути</a>
          </li>
          <li>
          <img src="src/pages/productCatalog/images/Frame56.jpg" alt="" />
          <div className={css.container_text}>
            <p className={css.title_poduct}>Наполеон</p>
            <p className={css.price_poduct}>500 UAH</p>
          </div>
          <a href='#prodact-view' onClick={handleClick}>Переглянути</a>
          </li>
          <li>
          <img src="src/pages/productCatalog/images/Frame56.jpg" alt="" />
          <div className={css.container_text}>
            <p className={css.title_poduct}>Наполеон</p>
            <p className={css.price_poduct}>500 UAH</p>
          </div>
          <a href='#prodact-view' onClick={handleClick}>Переглянути</a>
          </li>
          <li>
          <img src="src/pages/productCatalog/images/Frame56.jpg" alt="" />
          <div className={css.container_text}>
            <p className={css.title_poduct}>Наполеон</p>
            <p className={css.price_poduct}>500 UAH</p>
          </div>
          <a href='#prodact-view' onClick={handleClick}>Переглянути</a>
          </li>
      </ul>
      
    </div>
   </div>
   </>
  )
};