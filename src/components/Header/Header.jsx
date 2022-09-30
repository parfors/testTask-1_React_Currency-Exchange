import { useEffect } from 'react';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { fetchCurrency } from 'redux/currency/currency-operations';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getCurrencyRate, getLoading } from 'redux/selectors';

export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  const loading = useSelector(getLoading);
  const currencyRates = useSelector(getCurrencyRate);
  const usdRate = currencyRates.find(el => el.ccy === 'USD')?.buy;
  const eurRate = currencyRates.find(el => el.ccy === 'EUR')?.buy;

  return (
    <HeaderStyled>
      <SectionStyled>
        <LogoStyled />
        {loading ? (
          <LoadingStyled>Loading...</LoadingStyled>
        ) : (
          <CurrencyWrap>
            <CurrencyCourse>USD: {usdRate}</CurrencyCourse>
            <CurrencyCourse>EUR: {eurRate}</CurrencyCourse>
          </CurrencyWrap>
        )}
      </SectionStyled>
    </HeaderStyled>
  );
}

export const HeaderStyled = styled.header`
  background-color: ${p => p.theme.colors.gray};
`;

export const SectionStyled = styled.section`
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoStyled = styled(AiOutlineDollarCircle)`
  width: 100px;
  height: auto;
  &:hover {
    fill: ${p => p.theme.colors.accent};
  }
`;

export const CurrencyWrap = styled.div``;

export const CurrencyCourse = styled.p`
  font-size: ${p => p.theme.fontSizes.medium};
`;

export const LoadingStyled = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
`;
