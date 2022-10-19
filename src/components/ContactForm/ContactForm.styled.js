import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import {
  mediaTablet,
  mediaDesktop,
} from '../../functions/media';

export const FormContainer = styled.div`
  width: 300px;
  margin-top: 60px;
  margin-left: 10px;
  ${mediaTablet(`
  width: 557px;
  margin-top: 100px;
  margin-left: 20px;
  `)}
  ${mediaDesktop(`
  margin-top: 179px;
  margin-left: 150px;
  `)}
`;

export const FormTitle = styled.h2`
  font-size: 40px;
  line-height: 52px;
  margin-bottom: 30px;
`;

export const FormInput = styled(Form.Control)`
  min-width: 100%;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
`;

export const InputContainer = styled(FloatingLabel)`
  margin-bottom: 8px;
  label {
    color: #2d2d2d;
    padding: 30px 0 30px 46px;
  }
`;

export const TextareaContainer = styled(FloatingLabel)`
  margin-bottom: 23px;
  label {
    color: #2d2d2d;
    padding: 30px 0 30px 46px;
  }
`;

export const Button = styled.button`
  background: #fad34f;
  border-radius: 500px;
  color: #ffffff;
  padding: 27px 52px;
  border: none;
  margin-bottom: 114px;
  ${mediaTablet(`
  margin-bottom: 174px;
  `)}
  transition: transform 1s;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const textareaStyle = {
  height: '189px',
  minWidth: '100%',
  padding: '34px 30px 30px 46px',
  border: '1px solid #DCDCDC',
  borderRadius: '10px',
  resize: 'none',
  overflowY: 'auto',
};

export const inputLabelStyle = {
  padding: '32px 30px 30px 46px',
  height: '93px',
};
