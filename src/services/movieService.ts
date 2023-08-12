import api from "./api";

export default class MovieService {
  static get = async (): Promise<any[]> => {
    const { data } = await api.get("movies");
    return data;
  };
}
