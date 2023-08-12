import { styled } from "styled-components";

const StyledSearchBar = styled.input`
  padding: 0 0.5rem;
  line-height: 2rem;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.pallete.font.light};
  outline: none;
  background: none;
  color: ${({ theme }) => theme.pallete.font.light};
`;

export { StyledSearchBar };
