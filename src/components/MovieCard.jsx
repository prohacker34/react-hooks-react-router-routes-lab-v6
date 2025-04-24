import { Link } from "react-router-dom";

function MovieCard({ id, title }) {
  return (
    <article>
      <Link to={`/movie/${id}`}>View Info</Link>
      <h2>{title}</h2>
    </article>
  );
}

export default MovieCard;