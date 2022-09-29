import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
});

export const getExchangeRates = async () => {
  const response = await instance.get('');
  return response.data;
};
