import Hero from "./Hero";

//themoviedb API key = 9bad846e0f8b5d55c7693ccfccbcdcf5

const SearchView = ({ keyword, searchResults }) => {

    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        return <div key={i}>{obj.original_title}</div>
    })

    return (
        <div>
            <Hero text={title} />
            {resultsHtml}
        </div>
    )
}

export default SearchView;