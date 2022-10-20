import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Container } from '../components/Container';
import { ContactForm } from '../components/ContactForm';
import { StyledContainer } from '../components/StyledContainer';
import { Footer } from '../components/Footer';
import { fetchClients } from '../services/clientsApi';

export function HomePage() {
  useEffect(() => {
    const getClients = async () => {
      try {
        const data = await fetchClients();
        if (data.length) {
          return toast.success(
            `We have already received ${data.length} messages. Be one of them!`
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getClients();
  }, []);

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
