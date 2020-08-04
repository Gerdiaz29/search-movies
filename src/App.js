import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";

class App extends React.Component {
  state = {
    movie: null,
    isLoading: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const title = event.target[0].value;
    this.handleApiRequest(title);
    console.log(title);
  };

  handleApiRequest = (title) => {
    var url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
    url += `&t=${title}`;
    fetch(url)
      .then((res) => res.json())
      .then((movie) => {
        this.setState({
          movie,
          isLoading: false,
        });
      });
  };

  render() {
    const { movie, isLoading } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Movie Title"></input>
          <button>Search</button>
        </form>
        {isLoading && <h2>Loading...</h2>}
        {movie && !isLoading && <Movie movie={movie}></Movie>}
      </div>
    );
  }
}
export default App;
