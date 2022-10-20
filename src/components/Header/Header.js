import {
  HeaderStyled,
  HeaderList,
  Link,
} from './Header.styled';
import { Container } from '../Container';

export function Header() {
  return (
    <HeaderStyled>
      <Container>
        <nav>
          <HeaderList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/message">Message</Link>
            </li>
          </HeaderList>
        </nav>
      </Container>
    </HeaderStyled>
  );
}
