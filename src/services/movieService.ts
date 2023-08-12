import api from "./api";
import { MovieEntity } from "../types";

interface MovieGetResponse {
  movies: MovieEntity;
  totalCount: number;
  totalPages: number;
}

const itemsPerPage = 9;

export default class MovieService {
  static get = async (page: number): Promise<MovieGetResponse> => {
    const { data: movies, headers } = await api.get(
      `movies?_page=${page}&_limit=${itemsPerPage}`
    );
    
    const totalCount = parseInt(headers["x-total-count"] as string, 10);

    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return { movies, totalCount, totalPages };
  };
}
