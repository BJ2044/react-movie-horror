function MovieComponent() {
return (

    <div className='movie-card' key={movieProp.id}>
          <img className='movie-poster'
            src={movieProp.posterURL}
            alt={movieProp.title} />
          <h3 className='movie-title'>
            {movieProp.title}
          </h3>
        </div>
)



}

export default Movie