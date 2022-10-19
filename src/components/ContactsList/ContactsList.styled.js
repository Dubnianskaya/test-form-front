import styled from 'styled-components';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const ContactsListContainer = styled.ul`
  display: flex;
  justify-content: center;
  ${mediaTablet(`
  justify-content: flex-start;
  margin-left: 143px;
  `)}
  ${mediaDesktop(`
  margin-left: 343px;
  `)}
`;

export const IconLink = styled.a`
  &:hover,
  &:focus {
    svg {
      fill: #fad34f;
    }
  }
`;

export const Icons = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;
