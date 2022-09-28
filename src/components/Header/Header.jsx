import styled from 'styled-components';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { getExchangeRates } from 'helpers/api';

export default function Header() {
  getExchangeRates();
  return (
    <HeaderStyled>
      <SectionStyled>
        <LogoStyled />
        <CurrencyWrap>
          <CurrencyCourse>USD</CurrencyCourse>
          <CurrencyCourse>EUR</CurrencyCourse>
        </CurrencyWrap>
      </SectionStyled>
    </HeaderStyled>
  );
}

export const HeaderStyled = styled.header``;

export const SectionStyled = styled.section``;

export const LogoStyled = styled(AiOutlineDollarCircle)``;

export const CurrencyWrap = styled.div``;

export const CurrencyCourse = styled.p``;
