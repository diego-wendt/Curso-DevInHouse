import styled from "styled-components";

export const Container = styled.section`
  margin: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
