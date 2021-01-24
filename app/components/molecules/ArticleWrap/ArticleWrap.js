/**
 *
 * Movie Listing
 *
 *  */

// @flow
import React from "react";

import styles, {
  MovieTileContainer,
  MovieWrapper,
  MainContainer,
} from "./ArticleWrap.style";
import withStyles from "../../../lib/withStyles";
import NotFound from "../NotFound";

const ArticleWrap = ({
  title,
  children,
  subtitle,
  CinemaWorldData,
  className,
  getMovie,
}) => {
  const { Movies } = CinemaWorldData;
  const getClickedMovie = (event, movieId) => {
    event.preventDefault();
    getMovie(movieId);
  };
  return (
    <MainContainer>
      <div className={className}>
        <MovieWrapper>
          {Movies ? (
            Movies.map((movie, count) => (
              <MovieTileContainer
                onClick={(event) => getClickedMovie(event, movie.ID)}
              >
                <img
                  className={className}
                  alt={movie.Title}
                  src={movie.Poster}
                />{" "}
              </MovieTileContainer>
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
