import axios from 'axios';

const APP_ID = '0b87f807daf749c4a33de27ffb094230';


export const currencyAPI = axios.create({
  baseURL: `https://openexchangerates.org/api`,
});

export const getCurrencyData = async () => {
  try {
    const { data } = await currencyAPI.get(`/latest.json?app_id=${APP_ID}`);
    if (data && data.rates) {
      return data.rates;
    } else {
      throw new Error(
        'Could not get data from exchange rate API.'
      );
    }
  } catch (error) {
    console.error('Error in obtaining the exchange rate', error.message);
    return null;
  }
};