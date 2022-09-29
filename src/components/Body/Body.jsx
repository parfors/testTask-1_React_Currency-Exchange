import InputCurrency from 'components/InputCurrency/InputCurrency';
import styled from 'styled-components';
import { SectionStyled } from '../Header/Header';
import { currencyData } from 'helpers/currencyData';

import { useState } from 'react';

export default function Body() {
  const [state, setState] = useState({
    currency: '',
    value: '',
  });

  const inputChangeHandler = ({
    target: {
      value,
      dataset: { currency },
    },
  }) => {
    setState({ ...state, currency, value });
  };

  const resetState = () => {
    setState({ currency: '', value: '' });
  };

  return (
    <SectionStyled>
      <MainTittleStyled>Currency exchange</MainTittleStyled>
      <InputCurrency
        changeHandler={inputChangeHandler}
        currencies={currencyData}
        state={state}
        reset={resetState}
      />
      <InputCurrency
        changeHandler={inputChangeHandler}
        currencies={currencyData}
        state={state}
        reset={resetState}
      />
    </SectionStyled>
  );
}

export const MainTittleStyled = styled.h1`
  text-transform: uppercase;
`;
