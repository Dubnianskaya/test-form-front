import styled from 'styled-components';

import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const ContainerBody = styled.div`
  max-width: 320px;
  margin: 0 auto;
  ${mediaTablet(`
  max-width: 768px;
  `)}
  ${mediaDesktop(`
  max-width: 1440px;
  `)}
`;
