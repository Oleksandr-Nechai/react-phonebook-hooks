import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormikStyled = styled(Form)`
  padding: 10px;
  border: 3px solid white;
  border-radius: 6px;
  font-weight: 700;
  color: rgb(147, 147, 223);
`;

export const Items = styled.label`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;
export const Input = styled(Field)`
  margin-top: 5px;
`;

export const Button = styled.button`
padding: 6px;
border-radius: 4px;
box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
  rgb(0 0 0 / 14%) 0px 3px 4px 0px,
  rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  :hover,
  :focus {
    background-color: rgb(147, 147, 223);
  `;

export const ErrorStyle = styled.div`
  position: absolute;
  top: 100%;
  color: rgb(255, 0, 0, 0.6);
`;
