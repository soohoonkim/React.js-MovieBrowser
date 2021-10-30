import Hero from "./Hero";

//themoviedb API key = 9bad846e0f8b5d55c7693ccfccbcdcf5

const SearchView = ({ keyword, searchResults }) => {

    const title = `You are searching for ${keyword}`

    return (
        <div>
            <Hero text={title} />
        </div>
    )
}

export default SearchView;