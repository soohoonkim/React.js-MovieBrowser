import Hero from "./Hero";

const SearchView = ({ keyword, searchResults }) => {

    const title = `You are searching for ${keyword}`
    console.log(searchResults, "are the results from your search") 

    return (
        <div>
            <Hero text={title} />
        </div>
    )
}

export default SearchView;