import styled from 'styled-components';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';
import map from '../../assets/images/map.png';

export const StyledContainerBody = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  ${mediaTablet(`
height: 976px;
width: 976px;
top: -20px;
right: -464px;
background-image: url(${map});
background-repeat: no-repeat;
background-position: center;
background-size: 976px 976px;
`)}
  ${mediaDesktop(`
  right: -364px;
  `)}
`;

export const SmileOne = styled.svg`
  position: absolute;
  left: 32px;
  top: 30px;
  z-index: -1;
`;

export const Circle = styled.svg`
  position: absolute;
  left: 214px;
  top: 20px;
  z-index: -1;
  ${mediaTablet(`
  left: 414px;
  `)}
  ${mediaDesktop(`
  left: 714px;
  `)}
`;

export const SmileContainer = styled.div`
  position: absolute;
  ${mediaTablet(`
  top: 615px;
  left: 60px;
  `)}
  ${mediaDesktop(`
  top: 515px;
  left: -50px;
  `)}
`;

export const SmileTwo = styled.svg`
  position: absolute;
  z-index: 1;
`;

export const SmileThree = styled.svg`
  position: absolute;
  left: 60px;
  top: 60px;
`;
