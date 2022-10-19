import styled from 'styled-components';
import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const StyledContainerBody = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -20px;
  right: -36px;
  overflow: hidden;
  z-index: -5;
  padding-left: 40px;
  ${mediaTablet(`
top: -200px;
right: -364px;
`)}
`;

export const Image = styled.img`
  display: block;
  width: 0;
  height: 0;
  border-radius: 50%;
  object-fit: fill;
  z-index: -5;
  ${mediaTablet(`
width: 976px;
height: 976px;
`)}
`;

export const SmileOne = styled.svg`
  position: absolute;
  left: 32px;
  top: -40px;
  z-index: -1;
  ${mediaTablet(`
top: -80px;
`)}
  ${mediaDesktop(`
top: -150px;
`)}
`;

export const Circle = styled.svg`
  position: absolute;
  left: 214px;
  top: -30px;
  z-index: -1;
  ${mediaTablet(`
top: -70px;
left: 414px;
`)}
  ${mediaDesktop(`
top: -160px;
left: 714px;
`)}
`;

export const SmileContainer = styled.div`
  position: absolute;
  left: 0;
  top: 275px;
  ${mediaTablet(`
top: 765px;
left: 60px;
`)}
  ${mediaDesktop(`
top: 515px;
left: 0;
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
