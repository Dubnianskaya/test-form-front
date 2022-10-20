import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { emailRegExp } from '../../libs/constants';
import { addClient } from '../../services/clientsApi';
import { useDispatch } from 'react-redux';
import { messageReducer } from '../../redux/message';
import {
  FormContainer,
  FormTitle,
  FormInput,
  InputContainer,
  TextareaContainer,
  Button,
  inputLabelStyle,
  textareaStyle,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().max(100).required(),
  mail: yup
    .string()
    .email()
    .max(100)
    .required()
    .matches(emailRegExp, 'enter real email'),
  message: yup.string().required(),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const submitClientData = async data => {
    setLoading(true);
    try {
      await addClient(data);
      dispatch(messageReducer.addMessage(data));
      setLoading(false);
      return toast.success(
        'Your message has been successfully sent!'
      );
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      return toast.error('Oops! Something went wrong :(');
    }
  };

  return (
    <section>
      <FormContainer>
        <FormTitle>Reach out to us!</FormTitle>
        <Formik
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            submitClientData(values);
            resetForm();
          }}
          initialValues={{
            name: '',
            mail: '',
            message: '',
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <InputContainer
                  controlId="name"
                  label="Your name*"
                >
                  <FormInput
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    style={inputLabelStyle}
                  />
                </InputContainer>
              </Form.Group>
              <Form.Group controlId="email">
                <InputContainer
                  controlId="email"
                  label="Your e-mail*"
                >
                  <FormInput
                    type="email"
                    placeholder="name@example.com"
                    name="mail"
                    value={values.mail}
                    onChange={handleChange}
                    isInvalid={!!errors.mail}
                    style={inputLabelStyle}
                  />
                </InputContainer>
              </Form.Group>
              <Form.Group controlId="message">
                <TextareaContainer
                  controlId="message"
                  label="Your message*"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    style={textareaStyle}
                  />
                </TextareaContainer>
              </Form.Group>
              <Button type="submit">
                {loading ? 'Sending...' : 'Send message'}
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </section>
  );
}
