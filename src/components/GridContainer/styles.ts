import { styled } from "styled-components";
import { calculateMiddleBreakpoint } from "../../utils";

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${({ theme }) =>
      calculateMiddleBreakpoint(
        theme.breakpoints.md,
        theme.breakpoints.lg
      )}px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export { StyledGridContainer };
