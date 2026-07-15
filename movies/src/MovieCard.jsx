function MovieCard({ movie }) {
  return (
    <section className="card">
        <img src={movie.image} alt={movie.title} />

        <p>Genre: {movie.genre}</p>
        
        <p>Year: {movie.year}</p>
    </section>   
  )
}

export default MovieCard