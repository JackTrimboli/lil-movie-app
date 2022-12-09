import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieCardList = (props) => {
  const [movieData, setMovieData] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [mounted, setMounted] = useState(false);
  // Fetch Data from movie api on mount
  useEffect(() => {
    if (!mounted) {
      callApi();
      setMounted(true);
    }
  }, []);

  // or if the searchProp Updates
  useEffect(() => {
    if (mounted) {
      if (props.searchProp === "") {
        callApi();
      } else {
        callSearchApi();
      }
    }
  }, [props.searchProp]);

  useEffect(() => {
    if (mounted) {
      setMovieCards();
    }
  }, [movieData]);

  const callSearchApi = () => {
    const options = {
      method: "GET",
      url: `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${props.searchProp}`,
      params: { limit: "20", page: "1" },
      headers: {
        "X-RapidAPI-Key": "e935a69b5emshaefbc5188846d64p1b0893jsnc85a3848b98a",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setMovieData(response.data);
        // setMovieCards();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const callApi = () => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
      params: { limit: "20", page: "1", titleType: "movie" },
      headers: {
        "X-RapidAPI-Key": "e935a69b5emshaefbc5188846d64p1b0893jsnc85a3848b98a",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMovieData(response.data);
        // setMovieCards();
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  
  const setMovieCards = () => {
    console.log("movie data: ", movieData.results);
    let list = movieData.results.map((movie) => {
      return (
        <MovieCard
          id={movie.id}
          key={movie.id}
          image={movie.primaryImage}
          title={movie.titleText}
          releaseDate={movie.releaseDate}
        />
      );
    });
    setMovieList(list);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <div>{movieList && movieList.length ? movieList : null}</div>
    </div>
  );
};

export default MovieCardList;
