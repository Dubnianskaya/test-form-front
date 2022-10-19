import {
  ContactsListContainer,
  IconLink,
  Icons,
} from './ContactsList.styled';
import sprite from '../../assets/icons/icon-sprite.svg';

export function ContactsList() {
  return (
    <ContactsListContainer>
      <Icons>
        <IconLink
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg width="13" height="13" fill="#696969">
            <use href={`${sprite}#icon-linkedin`}></use>
          </svg>
        </IconLink>
      </Icons>
      <Icons>
        <IconLink
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg width="13" height="13" fill="#696969">
            <use href={`${sprite}#icon-twitter`}></use>
          </svg>
        </IconLink>
      </Icons>
      <Icons>
        <IconLink
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg width="13" height="13" fill="#696969">
            <use href={`${sprite}#icon-facebook`}></use>
          </svg>
        </IconLink>
      </Icons>
      <Icons>
        <IconLink
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg width="13" height="13" fill="#696969">
            <use href={`${sprite}#icon-pinterest`}></use>
          </svg>
        </IconLink>
      </Icons>
    </ContactsListContainer>
  );
}
