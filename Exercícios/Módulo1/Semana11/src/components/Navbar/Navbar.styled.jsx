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

