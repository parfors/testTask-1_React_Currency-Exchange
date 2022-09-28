import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bank.gov.ua/NBU_Exchange/exchange?json',
});

export const getExchangeRates = async () => {
  const response = await instance.get('/');
  console.log(response);
  return response.data;
};
