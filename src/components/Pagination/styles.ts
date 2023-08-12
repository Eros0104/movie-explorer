import { styled } from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

interface PageButtonProps {
  active: boolean;
}

const PageButton = styled.button<PageButtonProps>`
  padding: 8px 12px;
  margin: 0 4px;
  border: none;
  background-color: ${(props) => (props.active ? "#3498db" : "#ccc")};
  color: white;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => (props.active ? "#2980b9" : "#ccc")};
  }
`;

export { PageButton, PaginationWrapper };
