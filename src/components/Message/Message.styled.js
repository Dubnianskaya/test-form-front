import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const MessageContainer = styled.div`
  width: 300px;
  margin-top: 120px;
  margin-left: 10px;
  ${mediaTablet(`
  width: 557px;
  margin-top: 179px;
  margin-left: 20px;
  `)}
  ${mediaDesktop(`
  margin-top: 279px;
  margin-left: 150px;
  `)}
`;

export const MessageLinkStyled = styled(NavLink)`
  color: #fad34f;
  text-decoration: none;
  transition: text-shadow 1s;
  &:hover,
  &:focus {
    color: #fad34f;
    text-shadow: 1px 1px 2px #000;
  }
`;
