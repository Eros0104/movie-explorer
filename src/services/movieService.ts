import api from "./api";
import { MovieEntity } from "../types";

interface MovieGetResponse {
  movies: MovieEntity[];
  totalCount: number;
  totalPages: number;
}

const itemsPerPage = 10;

export default class MovieService {
  static get = async (
    page: number,
    filter?: string
  ): Promise<MovieGetResponse> => {
    const filterQuery = filter ? `&title_like=${filter}` : "";
    const { data: movies, headers } = await api.get(
      `movies?_page=${page}&_limit=${itemsPerPage}${filterQuery}`
    );

    const totalCount = parseInt(headers["x-total-count"] as string, 10);

    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return { movies, totalCount, totalPages };
  };
}
