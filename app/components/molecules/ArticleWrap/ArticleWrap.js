/**
 *
 * Movie Listing
 *
 *  */

// @flow
import React from "react";
import { useRouter } from "next/router";
import styles, { MovieWrapper, MainContainer } from "./ArticleWrap.style";
import withStyles from "../../../lib/withStyles";
import NotFound from "../NotFound";
import MovieTile from "../../atoms/MovieTile";

const ArticleWrap = ({
  title,
  children,
  subtitle,
  CinemaWorldData,
  className,
  getMovie,
}) => {
  const { Movies } = CinemaWorldData;
  const router = useRouter();
  const getClickedMovie = (event, movieId) => {
    event.preventDefault();
    getMovie(movieId);
    router.push("/experience");
  };
  return (
    <MainContainer>
      <div className={className}>
        <MovieWrapper>
          {Movies ? (
            Movies.map((movie, count) => (
              <MovieTile
                movie={movie}
                getClickedMovie={getClickedMovie}
              ></MovieTile>
            ))
          ) : (
            <NotFound></NotFound>
          )}

          <div className="inner">
            <h2>{title}</h2>
            {subtitle && <div className="sub-heading">{subtitle}</div>}
            <div>{children}</div>
          </div>
        </MovieWrapper>
      </div>
    </MainContainer>
  );
};
ArticleWrap.defaultProps = {};

export default withStyles(ArticleWrap, styles);
