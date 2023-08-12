import { StyledHeader, HeaderContent, Title } from "./styles";

interface Props {
  children: React.ReactNode;
  title: string;
}

const Header = ({ children, title }: Props) => {
  return (
    <StyledHeader>
      <Title>{title}</Title>
      <HeaderContent>{children}</HeaderContent>
    </StyledHeader>
  );
};

export default Header;
