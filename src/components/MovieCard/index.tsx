import {
  Container,
  Cover,
  CoverContainer,
  Description,
  DescriptionContainer,
  DescriptionFooter,
  Info,
  Title,
} from "./styles";

interface Props {
  cover: string;
  description: string;
  director: string;
  title: string;
  year: number;
}

const MovieCard = ({ title, cover, description, director, year }: Props) => {
  return (
    <Container>
      <CoverContainer>
        <Cover src={cover}></Cover>
        <Title>{title}</Title>
      </CoverContainer>
      <DescriptionContainer>
        <Description>{description}</Description>
        <DescriptionFooter>
          <Info>{year}</Info>
          <Info>{director}</Info>
        </DescriptionFooter>
      </DescriptionContainer>
    </Container>
  );
};

export default MovieCard;
