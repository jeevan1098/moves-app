import React, { Component } from 'react';
import MovieList from '../MovieList';
import './index.css';

class TopRatedPage extends Component {
  state = {
    movies: [],
    currentPage: 1,
    totalPages: 1,
  };

  componentDidMount() {
    this.fetchTopRatedMovies(this.state.currentPage);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchTopRatedMovies(this.state.currentPage);
    }
  }

  fetchTopRatedMovies = async (page) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=5f15219f1dd4da7e2b2e9f0e246416a4&language=en-US&page=${page}`
    );
    const data = await response.json();
    this.setState({ movies: data.results, totalPages: data.total_pages });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { movies, currentPage, totalPages } = this.state;

    return (
      <div className="top-rated-page">
        <h1>Top Rated Movies</h1>
        <MovieList movies={movies} />
        <div className="pagination">
          <button
            onClick={() => this.handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => this.handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default TopRatedPage;