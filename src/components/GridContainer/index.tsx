import { StyledGridContainer } from "./styles";

interface Props {
  children: React.ReactNode;
}

const StyledGrid = ({ children }: Props) => {
  return <StyledGridContainer>{children}</StyledGridContainer>;
};

export default StyledGrid;
