import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { API_ENDPOINT } from "./context";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = async (url) => {
    setIsLoading(true);
    // console.log(url);

    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      if (data.Response === "True") {
        setMovie(data);
        setError({ show: false, msg: "" });
        // console.log("movie fetch", movie);
      } else {
        setError({ show: true, msg: data.Error });
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }

  // console.log(movie);
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;

  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <p>{year}</p>
      </div>
      <Link to="/" className="btn">
        back to movies
      </Link>
    </section>
  );
};

export default SingleMovie;
