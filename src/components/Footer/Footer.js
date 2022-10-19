import { Container } from '../Container';
import {
  StyledFooter,
  SmileOne,
  SmileTwo,
  SmileThree,
  StyledFooterContacts,
} from './Footer.styled';
import { ContactsList } from '../ContactsList';
import sprite from '../../assets/icons/icon-sprite.svg';

export function Footer() {
  return (
    <StyledFooter>
      <SmileOne width="200" height="200">
        <use href={`${sprite}#icon-pink`}></use>
      </SmileOne>
      <SmileTwo width="78" height="97">
        <use href={`${sprite}#icon-green`}></use>
      </SmileTwo>
      <SmileThree width="86" height="86">
        <use href={`${sprite}#icon-yellow-up`}></use>
      </SmileThree>
      <Container>
        <StyledFooterContacts>
          <ContactsList />
        </StyledFooterContacts>
      </Container>
    </StyledFooter>
  );
}
