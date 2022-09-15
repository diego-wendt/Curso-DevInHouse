import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
`;

/* a prop por der passa com ou sem destructuring */
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 10px;
  border: none;

  &:hover {
    opacity: 0.7;
  }
`;
