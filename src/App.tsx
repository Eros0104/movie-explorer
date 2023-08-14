import GlobalStyle from "./theme/globalStyles";
import {
  Container,
  MovieCard,
  Pagination,
  SearchBar,
  GridContainer,
  Header,
  Footer,
  Skeleton,
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
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchMovies(1);
  }, []);

  const fetchMovies = async (newPage: number, searchFilter?: string) => {
    setIsLoading(true);
    const result = await MovieService.get(newPage, searchFilter);

    setMovies(result.movies);
    setPaginationData({
      pages: result.totalPages,
      currentPage: newPage,
    });
    setIsLoading(false);
  };

  const handlePageChange = async (page: number) => {
    await fetchMovies(page, search);
  };

  const handleSearchBarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const firstPage = 1;
    const inputValue = event.target.value;
    setSearch(inputValue);
    await fetchMovies(firstPage, inputValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header title="Movie Explorer">
        <SearchBar onChange={handleSearchBarChange} />
      </Header>
      <Container>
        <GridContainer>
          {isLoading
            ? Array.from({ length: 10 }, (_, index) => (
                <Skeleton key={index} width={230} height={129} />
              ))
            : movies.map((movie, index) => (
                <MovieCard
                  cover={index % 2 === 0 ? movieCover : movieCover2}
                  description={movie.description}
                  title={movie.title}
                  director={movie.director}
                  year={movie.year}
                />
              ))}
        </GridContainer>
        <Footer>
          <Pagination
            currentPage={paginationData.currentPage}
            totalPages={paginationData.pages}
            onPageChange={handlePageChange}
          />
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
