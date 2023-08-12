import { styled } from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg}px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 1rem;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;

export { StyledHeader, HeaderContent, Title };
