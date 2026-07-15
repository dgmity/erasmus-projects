import { useState } from "react";
import "./App.css";

import movies from "./Movies";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";

function App() {

  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">

      <h1>Movie Search App</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="movies">

        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
        ) : (
          <h2>No Movie Found</h2>
        )}

      </div>

    </div>
  );
}

export default App;