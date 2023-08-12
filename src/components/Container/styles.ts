import { styled } from "styled-components";

const StyledContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.md}px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

export { StyledContainer };
