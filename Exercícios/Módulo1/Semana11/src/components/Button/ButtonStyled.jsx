import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 10px;
  border: none;

  &:hover {
    opacity: 0.7;
  }
`;
