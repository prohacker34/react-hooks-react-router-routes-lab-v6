import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null); // Initialize as null

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data)) // Update state with the fetched movie object
      .catch((error) => console.error("Error fetching movie:", error)); // Add error handling
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>; // Show loading message while data is being fetched
  }

  return (
    <>
      <header>
        <NavBar />
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Time: {movie.time}</p>
        <div>
          Genres:{" "}
          {movie.genres &&
            movie.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
        </div>
        <button>View Info</button>
      </main>
    </>
  );
}

export default Movie;
