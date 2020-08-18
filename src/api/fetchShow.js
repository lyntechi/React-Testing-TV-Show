import axios from "axios";
export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((response) => response)
    .catch((error) => console.log("error fetching data from api", error));
};
