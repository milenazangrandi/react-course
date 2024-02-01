import { useState } from "react";
import { useMovies } from "./customHooks/useMovies";
import { useLocalStoregeState } from "./customHooks/useLocalStoregeState";

import NavBar from "./NavBar";
import Search from "./Search";
import Main from "./Main";
import NumResults from "./NumResults";
import Box from "./Box";
import Loader from "./Loader";
import MovieList from "./MovieList";
import ErrorMessage from "./ErrorMessage";
import MovieDetails from "./MovieDetails";
import WatchedMoviesList from "./WatchedMoviesList";
import WatchedSummary from "./WatchedSumary";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStoregeState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    !watched.some((e) => e.imdbID === movie.imdbID) &&
      setWatched((watched) => [...watched, movie]);
  }

  function handleDelete(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDelete}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
