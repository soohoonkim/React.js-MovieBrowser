import Hero from "./Hero";
import { Link } from 'react-router-dom';

//themoviedb API key = 9bad846e0f8b5d55c7693ccfccbcdcf5

const MovieCard = ({movie}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const detailUrl = `/movie/${movie.id}`
    return (
        <div className="col-lg-3 col-md-4 my-4">
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
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