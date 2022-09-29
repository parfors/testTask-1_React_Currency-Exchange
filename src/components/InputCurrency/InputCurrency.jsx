import styled from 'styled-components';
import { useState } from 'react';
import { getCurrencyRate } from 'redux/selectors';
import { useSelector } from 'react-redux';

export default function InputCurrency({
  currencies,
  changeHandler,
  state,
  reset,
}) {
  const currencyRates = useSelector(getCurrencyRate);
  const [selectedCurrency, setSelectedCurrency] = useState('UKR');

  const { currency, value } = state;

  const selectChangeHandler = e => {
    setSelectedCurrency(e.target.value);
    reset();
  };

  const rate = Math.random();

  return (
    <>
      <LabelStyled>
        <LabelSpan>Sale</LabelSpan>
        <InputStyled
          onChange={changeHandler}
          data-currency={selectedCurrency}
          value={selectedCurrency === currency ? value : value / rate}
        />
        <SelectStyled onChange={selectChangeHandler}>
          {currencies.map(el => (
            <SelectOption key={el} value={el}>
              {el}
            </SelectOption>
          ))}
        </SelectStyled>
      </LabelStyled>
    </>
  );
}

export const LabelStyled = styled.label`
  display: block;
`;
export const LabelSpan = styled.span``;
export const InputStyled = styled.input``;
export const SelectStyled = styled.select``;
export const SelectOption = styled.option``;
