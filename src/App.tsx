import GlobalStyle from "./theme/globalStyles";
import { Container, MovieCard } from "./components";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

const movieCover = "https://pics.filmaffinity.com/Seven-936725492-large.jpg";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        Movie Explorer
        <br />
        <MovieCard
          cover={movieCover}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quam harum sit libero esse. Cumque tempore corporis quam asperiores,
            deserunt officia doloremque quae?"
          title="Seven"
          director="David Fincher"
          year={1999}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
