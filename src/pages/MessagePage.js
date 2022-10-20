import { Container } from '../components/Container';
import { StyledContainer } from '../components/StyledContainer';
import { Message } from '../components/Message';
import { Footer } from '../components/Footer';

export function MessagePage() {
  return (
    <>
      <StyledContainer>
        <Container>
          <Message />
        </Container>
      </StyledContainer>
      <Footer />
    </>
  );
}
