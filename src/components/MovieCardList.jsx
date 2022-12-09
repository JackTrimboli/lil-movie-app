import { useState, useEffect } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
  params: { limit: "20", page: "1", titleType: "movie" },
  headers: {
    "X-RapidAPI-Key": "e935a69b5emshaefbc5188846d64p1b0893jsnc85a3848b98a",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

const MovieCardList = (props) => {
  const [movieData, setMovieData] = useState({});

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setMovieData(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  // Fetch Data from movie api on mount
  useEffect(() => {
    console.log("New Search Input: ", props.searchInput);
  }, [props.searchInput]);

  return <div></div>;
};

export default MovieCardList;
