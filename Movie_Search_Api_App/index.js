import dotenv from "dotenv";
dotenv.config();
import { search } from "./api";
import { appendMovies, clearMovies, setMessage } from "./ui";


(() => {
  const handleSearchButtonClick = () => {
    const searchTerm = document.getElementById("search-pane-input").value;

    clearMovies();
    setMessage('searching for movies, please wait...');

    search(searchTerm)
      .then((response) => {
        if (response.Response === "True") {
          appendMovies(response.Search);
          setMessage();
        } else {
          setMessage('could not find any matches, please refine your search term');
        }
      })
      .catch((error) => {
        setMessage("unexpected error ocurred, please try again later");
      });
  };

  window.addEventListener("load", () => {
    document
      .getElementById("search-pane-button")
      .addEventListener("click", handleSearchButtonClick);
  });
})();