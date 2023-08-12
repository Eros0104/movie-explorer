import GlobalStyle from "./theme/globalStyles";
import {
  Container,
  MovieCard,
  Pagination,
  SearchBar,
  GridContainer,
} from "./components";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import React, { useEffect, useState } from "react";
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
      <Container>
        Movie Explorer
        <br />
        <SearchBar onChange={handleSearchBarChange} />

        <GridContainer>
          {movies.map((movie) => (
              <MovieCard
                cover={movieCover}
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
