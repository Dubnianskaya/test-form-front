import { Container } from '../components/Container';
import { ContactForm } from '../components/ContactForm';
import { StyledContainer } from '../components/StyledContainer';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <main>
      <StyledContainer>
        <Container>
          <ContactForm />
        </Container>
      </StyledContainer>
      <Footer />
    </main>
  );
}
