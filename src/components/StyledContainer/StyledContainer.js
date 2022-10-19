import {
  StyledContainerBody,
  ImageContainer,
  Image,
  SmileContainer,
  SmileOne,
  Circle,
  SmileTwo,
  SmileThree,
} from './StyledContainer.styled';
import map from '../../assets/images/map.png';
import sprite from '../../assets/icons/icon-sprite.svg';
import { useWindowDimensions } from '../../customHooks';
import { breakPoints } from '../../libs/constants';

export function StyledContainer({ children }) {
  const windowDimensions = useWindowDimensions();

  return (
    <StyledContainerBody>
      {windowDimensions.width >= breakPoints.TABLET && (
        <ImageContainer>
          <Image src={map} alt="map" />
          <SmileContainer>
            <SmileTwo width="127" height="127">
              <use
                href={`${sprite}#icon-yellow-down`}
              ></use>
            </SmileTwo>
            <SmileThree width="200" height="200">
              <use href={`${sprite}#icon-pink`}></use>
            </SmileThree>
          </SmileContainer>
        </ImageContainer>
      )}
      <SmileOne width="86" height="86">
        <use href={`${sprite}#icon-yellow-up`}></use>
      </SmileOne>
      <Circle width="87" height="87">
        <use href={`${sprite}#icon-circle`}></use>
      </Circle>

      {children}
    </StyledContainerBody>
  );
}
