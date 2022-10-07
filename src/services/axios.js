import axios from "axios";

export const handleGetAllMovies = async () => {
  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c";
  const response = await axios
    .get(URL)
    .then((response) => {
      if (response) return response;
    })
    .catch((error) => {
      if (error.response) return error.response;
    });
  // console.log(response.data.results);
  return response.data.results;
};
////////////////////
export const handleEditMovie = (id, data) => {
  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c";
  const response = axios
    .patch(URL + "/" + id, { params: data })
    .then((response) => {
      if (response) return response;
    })
    .catch((error) => {
      if (error.response) return error.response;
    });
  return response.data;
};
/////////////
export const handleRemoveMovie = (id) => {
  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c";
  const response = axios
    .delete(URL + "/" + id)
    .then((response) => {
      if (response) return response;
    })
    .catch((error) => {
      if (error.response) return error.response;
    });
  return response.data;
};
