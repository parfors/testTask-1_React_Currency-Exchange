import InputCurrency from 'components/InputCurrency/InputCurrency';
import styled from 'styled-components';
import { SectionStyled } from '../Header/Header';
import { currencyUAH } from 'helpers/currencyData';
import { useSelector } from 'react-redux';
import { getCurrencyRate } from 'redux/selectors';
import { useState } from 'react';

export default function Body() {
  const [state, setState] = useState({
    currency: 'UAH',
    value: '',
  });

  const currencyRates = useSelector(getCurrencyRate);
  const modifiedCurrencyRates = [...currencyRates, currencyUAH];

  const inputChangeHandler = ({
    target: {
      value,
      dataset: { currency },
    },
  }) => {
    setState({ ...state, currency, value });
  };

  return (
    <MainStyled>
      <MainSectionStyled>
        <MainTittleStyled>Currency exchange</MainTittleStyled>
        <InputCurrency
          changeHandler={inputChangeHandler}
          modifiedCurrencyRates={modifiedCurrencyRates}
          state={state}
        />
        <InputCurrency
          changeHandler={inputChangeHandler}
          modifiedCurrencyRates={modifiedCurrencyRates}
          state={state}
        />
      </MainSectionStyled>
    </MainStyled>
  );
}

export const MainStyled = styled.main`
  background-color: ${p => p.theme.colors.gray};
`;

export const MainSectionStyled = styled(SectionStyled)`
  display: block;
  text-align: center;
`;

export const MainTittleStyled = styled.h1`
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.xl};
  text-align: center;
`;
