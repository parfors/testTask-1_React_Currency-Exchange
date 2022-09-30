import styled from 'styled-components';
import { useState } from 'react';

export default function InputCurrency({
  modifiedCurrencyRates,
  changeHandler,
  state,
}) {
  const [selectedCurrency, setSelectedCurrency] = useState('UKR');
  const [selectedRate, setSelectedRate] = useState(1);
  const { currency, value } = state;
  const rate = modifiedCurrencyRates.find(el => el.ccy === currency)?.buy || 1;

  const selectChangeHandler = e => {
    setSelectedCurrency(e.target.value);
    const selectedRate = modifiedCurrencyRates.find(
      el => el.ccy === e.target.value
    )?.buy;
    setSelectedRate(selectedRate);
  };

  const calculate = () => {
    const fixedValue = value.replace(/^0/, '');
    const result =
      selectedCurrency === currency
        ? fixedValue
        : (fixedValue * rate) / selectedRate;
    return result || '';
  };

  return (
    <>
      <LabelStyled>
        <LabelSpan>Sale</LabelSpan>
        <InputStyled
          onChange={changeHandler}
          data-currency={selectedCurrency}
          value={calculate()}
        />
        <SelectStyled onChange={selectChangeHandler}>
          {modifiedCurrencyRates.map(el => (
            <SelectOption key={el.ccy} value={el.ccy}>
              {el.ccy}
            </SelectOption>
          ))}
        </SelectStyled>
      </LabelStyled>
    </>
  );
}

export const LabelStyled = styled.label`
  display: block;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const LabelSpan = styled.span`
  margin-right: 10px;
`;

export const InputStyled = styled.input`
  height: 20px;
  margin-right: 15px;
`;

export const SelectStyled = styled.select`
  height: 26px;
`;

export const SelectOption = styled.option``;
