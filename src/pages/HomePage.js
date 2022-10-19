import { Container } from '../components/Container';
import { ContactForm } from '../components/ContactForm';
import { StyledContainer } from '../components/StyledContainer';

export function HomePage() {
  return (
    <StyledContainer>
      <Container>
        <ContactForm />
      </Container>
    </StyledContainer>
  );
}
