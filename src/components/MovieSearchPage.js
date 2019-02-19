import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MovieList from './MovieList.js';
import axios from "axios";

/**
 * function for inserting the inputted search term to url of API call
 * @param {string} term - search term used for finding movies
 * @return {string}
 */
const getUrl = (term) => {
  let url =`https://api.themoviedb.org/3/search/movie?api_key=5e2efcc8e0f5516ba8c1964cfe44e66e&query=${term}`;
  return url;
}

export default class MovieSearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  /** handle inputted search term upon user hitting Enter key */
  searchChangeHandler(event) {
    if (event.key === 'Enter') {
      const searchTerm = event.target.value;
      this.getMovies(searchTerm);
    }
  }

  /** Make API call with proper url to get movie search results */
  getMovies = (term) => {
    axios.get(getUrl(term))
    .then(response => {
      /**  create new state object without mutating the original */
      const newState = Object.assign({}, this.state, {
        results: response.data.results
      });
      /** store the new state object in the component's state */
      this.setState(newState);
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>

        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
                <Header />
          </div>
        </nav>

        <div className="container-fluid">

          <Sidebar />

          <div className="col-sm-10 col-sm-offset-2 col-md-10 col-md-offset-2 main">

            <div className="section-header">
              <h2>Search Movies</h2>
            </div>

            <div>
              <input className="search-bar" onKeyUp={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
            </div>

            <MovieList list={this.state.results} />

          </div>
        </div>

      </div>
    )
  }
}
