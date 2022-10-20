import { useSelector } from 'react-redux';
import { messageSelectors } from '../../redux/message';
import { MessageContainer } from './Message.styled';
import { MessageLink } from './MessageLink';
import Table from 'react-bootstrap/Table';

export function Message() {
  const { name, mail, message } = useSelector(
    messageSelectors.getMessage
  );

  return (
    <MessageContainer>
      <Table borderless>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{name ? name : <MessageLink />}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{mail ? mail : 'example@gmail.com'}</td>
          </tr>
          <tr>
            <td>Message:</td>
            <td>
              {message
                ? message
                : 'Here will be your message.'}
            </td>
          </tr>
        </tbody>
      </Table>
    </MessageContainer>
  );
}
