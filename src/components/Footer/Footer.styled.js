import styled from 'styled-components';
import { mediaTablet } from '../../functions/media';

export const StyledFooter = styled.footer`
  background: #fafafa;
  border: 1px solid #d8d8d8;
  position: relative;
`;

export const SmileOne = styled.svg`
  position: absolute;
  left: -74px;
  top: 0px;
  ${mediaTablet(`
  left: 34px;
  top: 10px;
  `)}
`;

export const SmileTwo = styled.svg`
  position: absolute;
  right: 127px;
  top: -10px;
`;

export const SmileThree = styled.svg`
  position: absolute;
  right: -24px;
  top: 10px;
  ${mediaTablet(`
right: -24px;
top: 50px;
`)}
`;

export const StyledFooterContacts = styled.div`
  padding: 40px 0;
  position: relative;
  z-index: 1;
  ${mediaTablet(`
  padding: 80px 0;
  `)}
`;
