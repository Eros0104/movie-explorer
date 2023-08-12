import GlobalStyle from "./theme/globalStyles";
import { Container, MovieCard, Pagination } from "./components";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { useEffect, useState } from "react";
import MovieService from "./services/movieService";
import { MovieEntity } from "./types";

const movieCover = "https://pics.filmaffinity.com/Seven-936725492-large.jpg";
const App = () => {
  const [paginationData, setPaginationData] = useState({
    pages: 1,
    currentPage: 1,
  });
  const [movies, setMovies] = useState<MovieEntity[]>([]);

  useEffect(() => {
    fetchMovies(1);
  }, []);

  const fetchMovies = async (newPage: number) => {
    const result = await MovieService.get(newPage);
    console.log(result);
    setMovies(result.movies);
    setPaginationData({
      pages: result.totalPages,
      currentPage: newPage,
    });
  };

  const handlePageChange = async (page: number) => {
    await fetchMovies(page);
  };

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
        {movies.map((movie) => (
          <MovieCard
            cover={movieCover}
            description={movie.description}
            title={movie.title}
            director={movie.director}
            year={movie.year}
          />
        ))}
        <Pagination
          currentPage={paginationData.currentPage}
          totalPages={paginationData.pages}
          onPageChange={handlePageChange}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
