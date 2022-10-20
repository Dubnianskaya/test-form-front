import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mediaDesktop } from '../../functions/media';

export const HeaderStyled = styled.header`
  width: 100%;
  position: absolute;
  z-index: 5;
  top: 20px;
  ${mediaDesktop(`
top: 189px; 
right: 100px; 
`)}
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: center;
  ${mediaDesktop(`
  justify-content: flex-end;
`)}
`;

export const Link = styled(NavLink)`
  font-size: 32px;
  line-height: 40px;
  padding: 0 10px;
  color: #3e3e3e;
  text-decoration: none;
  transition: color 1s;
  transition: text-shadow 1s;
  &:hover,
  &:focus {
    color: #fad34f;
    text-shadow: 1px 1px 2px #000;
  }
`;
