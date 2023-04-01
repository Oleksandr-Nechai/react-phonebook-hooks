import styled from 'styled-components';

export const Items = styled.li`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  width: 350px;
`;

export const Button = styled.button`
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
    :hover,
    :focus {
       background-color: ${props =>
         props.theme.colors.primeryColor};
`;
