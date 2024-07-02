import React, { useEffect, useCallback, useState } from 'react';
import image from '../../images/currency.png';
import imageTab from '../../images/currencyTab.png';
import styles from '../../sass/Module/Currency.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { useMediaQuery } from 'react-responsive';
import { fetchCurrency } from '../../redux/currency/operations'; 
import { selectCurrency } from '../../redux/currency/selectors'; 

import { setLastUpdatedTime } from '../../redux/currency/currencySlice'; 
import { selectLastUpdatedTime } from '../../redux/currency/selectors'; 

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const selectedCurrency = useSelector(selectCurrency);
  const lastUpdatedTime = useSelector(selectLastUpdatedTime);

  const dispatch = useDispatch();

  const isHourPassed = useCallback(() => {
    const ONE_HOUR_IN_MS = 60 * 60 * 1000;
    return Date.now() - lastUpdatedTime >= ONE_HOUR_IN_MS;
  }, [lastUpdatedTime]);

  useEffect(() => {
    if (isHourPassed() || !lastUpdatedTime) {
      dispatch(fetchCurrency());
      setCurrency(selectedCurrency);
    } else {
      setCurrency(selectedCurrency);
    }
  }, [dispatch, lastUpdatedTime, isHourPassed, selectedCurrency]);

  useEffect(() => {
    dispatch(setLastUpdatedTime(Date.now()));
  }, [dispatch]);

  const isTablet = useMediaQuery({ query: '(max-width: 1279px' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div className={styles.currencyWrapper}>
      <div className={styles.gradient} />
      <div className={styles.currencyTable}>
        <div className={styles.currencyHeadWrapper}>
          <div className={styles.currencyTableHead}>
            <div className={styles.currencyTableHeadItem}>Currency</div>
            <div className={styles.currencyTableHeadItem}>Purchase</div>
            <div className={styles.currencyTableHeadItem}>Sale</div>
          </div>
        </div>

        <div className={styles.currencyTableBodyList}>
          {currency?.length &&
            currency.map(el => {
              return (
                <div className={styles.currencyTableBody} key={nanoid()}>
                  <div className={styles.currencyTableItem}>
                    {el.currencyName}
                  </div>
                  <div className={styles.currencyTableItem}>
                    {el.rateBuy.toFixed(2)}
                  </div>
                  <div className={styles.currencyTableItem}>
                    {el.rateSell.toFixed(2)}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles.currencyDiagram}>
        {currency?.map(item => {
          if (item.currencyName === 'USD') {
            return (
              <div className={styles.lowerNumber} key={nanoid()}>
                {Number(item.rateBuy).toFixed(2)}
              </div>
            );
          }
          return null;
        })}

        {currency?.map(item => {
          if (item.currencyName === 'EUR') {
            return (
              <div className={styles.higherNumber} key={nanoid()}>
                {Number(item.rateBuy).toFixed(2)}
              </div>
            );
          }
          return null;
        })}

        {isDesktop && <img src={image} alt="" />}
        {isTablet && <img src={imageTab} alt="" />}
      </div>
    </div>
  );
};

export default Currency;