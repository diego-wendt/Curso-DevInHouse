import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  width: 30%;
  gap: ${({ theme }) => theme.spacing.md}; ;
`;
