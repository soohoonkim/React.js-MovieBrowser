import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieView = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9bad846e0f8b5d55c7693ccfccbcdcf5&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovieDetails(data)
        })
    }, [id])

    return (
        <div>
            <Hero text={movieDetails.original_title} />
        </div>
    )
}

export default MovieView;
