import GlobalStyle from "./theme/globalStyles";
import {
  Container,
  MovieCard,
  Pagination,
  SearchBar,
  GridContainer,
  Header,
} from "./components";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import React, { useEffect, useState } from "react";
import MovieService from "./services/movieService";
import { MovieEntity } from "./types";

const movieCover = "https://pics.filmaffinity.com/Seven-936725492-large.jpg";
const movieCover2 =
  "https://images.bauerhosting.com/legacy/empire-tmdb/films/603/images/7u3pxc0K1wx32IleAkLv78MKgrw.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill";
const App = () => {
  const [paginationData, setPaginationData] = useState({
    pages: 1,
    currentPage: 1,
  });
  const [movies, setMovies] = useState<MovieEntity[]>([]);

  useEffect(() => {
    fetchMovies(1);
  }, []);

  const fetchMovies = async (newPage: number, searchFilter?: string) => {
    const result = await MovieService.get(newPage, searchFilter);
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

  const handleSearchBarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    await fetchMovies(paginationData.currentPage, inputValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header title="Movie Explorer">
        <SearchBar onChange={handleSearchBarChange} />
      </Header>
      <Container>
        <GridContainer>
          {movies.map((movie, index) => (
            <MovieCard
              cover={index % 2 === 0 ? movieCover : movieCover2}
              description={movie.description}
              title={movie.title}
              director={movie.director}
              year={movie.year}
            />
          ))}
        </GridContainer>
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
