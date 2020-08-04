import React from "react";

class Movie extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <h1>{movie.Title}</h1>
        <p>{movie.Plot}</p>
        <img src={movie.Poster} alt="Poster" />
      </div>
    );
  }
}

export default Movie;
