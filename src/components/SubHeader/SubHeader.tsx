import bisquitCake from '../../images/bisquitCake.jpg';
import firmCake from '../../images/firmCake.jpg';
import cheezeCake from '../../images/cheezeCake.jpg';
import chocolateCake from '../../images/chocolateCake.jpg';
import classicCake from '../../images/classicCake.jpg';
import classes from './subHeader.module.scss';

export const SubHeader: React.FC = () => {

  return (
    <div className={classes.categories_container}>
        <div className={classes.categories}>
          <div className={`${classes.category__card} ${classes.category_bisquit}`}>
            <div className={classes.category__Cake}>
              <img src={bisquitCake} alt='bisquitCake' />
            </div>
            <p> Бісквітні </p>
          </div>

          <div className={`${classes.category__card} ${classes.category_firm}`}>
            <div className={classes.category__Cake}>
              <img src={firmCake} alt='firmCake' />
            </div>
            <p> Фірмові </p>
          </div>

          <div className={`${classes.category__card} ${classes.category_cheeze}`}>
            <div className={classes.category__Cake}>
              <img src={cheezeCake} alt='cheezeCake' />
            </div>
            <p> Чізкейки </p>
          </div>

          <div className={`${classes.category__card} ${classes.category_chocolate}`}>
            <div className={classes.category__Cake}>
              <img src={chocolateCake} alt='chocolateCake' />
            </div>
            <p> Шоколадні </p>
          </div>

          <div className={`${classes.category__card} ${classes.category_classic}`}>
            <div className={classes.category__Cake}>
              <img src={classicCake} alt='classicCake' />
            </div>
            <p> Класичні </p>
          </div>
        </div>
      </div>
  )
}