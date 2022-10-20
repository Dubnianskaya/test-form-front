import { MessageLinkStyled } from './Message.styled';

export function MessageLink() {
  return (
    <p>
      No messages yet.{' '}
      <MessageLinkStyled to="/">
        Write your first message!
      </MessageLinkStyled>
    </p>
  );
}
