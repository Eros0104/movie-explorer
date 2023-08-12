import {
  Container,
  Title,
  Cover,
  CoverContainer,
  Description,
  DirectorName,
} from "./styles";

interface Props {
  title: string;
  cover: string;
  description: string;
}

const MovieCard = ({ title, cover, description }: Props) => {
  return (
    <Container>
      <CoverContainer>
        <Cover src={cover}></Cover>
        <Title>{title}</Title>
      </CoverContainer>
      <Description>
        {description}
        <DirectorName>David Fincher</DirectorName>
      </Description>
    </Container>
  );
};

export default MovieCard;
