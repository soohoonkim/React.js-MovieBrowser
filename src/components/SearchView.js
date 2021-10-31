import Hero from "./Hero";

//themoviedb API key = 9bad846e0f8b5d55c7693ccfccbcdcf5

const MovieCard = ({movie}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    return (
        <div className="col-lg-3 col-md-4 my-4">
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <a href="#" className="btn btn-primary">Show details</a>
                </div>
            </div>
        </div>
    )
}

const SearchView = ({ keyword, searchResults }) => {

    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    return (
        <div>
            <Hero text={title} />
            {resultsHtml &&
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchView;