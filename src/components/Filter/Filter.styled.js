import styled from 'styled-components';

export const Label = styled.label`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.primaryColor};
`;

export const Input = styled.input`
  margin-top: 5px;
`;
