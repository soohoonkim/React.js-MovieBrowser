import './App.css';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import { Switch, Route } from 'react-router-dom';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9bad846e0f8b5d55c7693ccfccbcdcf5&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setSearchResults(data.results)
    })
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} /> 
        <Route path="/search">
          <SearchView keyword={searchText} searchReasults={searchResults} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
