import React from 'react';
import styled from 'styled-components';
import logoSymbol from '../../assets/icons/logoSymbol.svg';
import logoTxt from '../../assets/icons/logoTxt.svg';

const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = props => {
  return (
    <LogoWrap>
      <img src={logoSymbol} alt="" />
      <img style={{ marginLeft: '15px' }} src={logoTxt} alt="" />
    </LogoWrap>
  );
};
export default Logo;
