import { StyledContainer } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
