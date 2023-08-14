import { styled } from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

interface PageButtonProps {
  active: boolean;
}

const PageButton = styled.button<PageButtonProps>`
  padding: 0.5rem 0.8rem;
  margin: 0 0.25rem;
  border: ${({ active, theme }) =>
    active ? theme.pallete.primary.main + " 2px solid" : "none"};
  background: none;
  color: white;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: 0.2s ease;

  &:hover {
    background-color: ${({ active, theme }) => theme.pallete.primary.dark};
  }
`;

export { PageButton, PaginationWrapper };
