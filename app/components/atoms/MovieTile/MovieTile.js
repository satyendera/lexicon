/**
 * Created by dcha17 on 1/5/2018.
 */

// @flow
import React from "react";

import styles,{MovieTileContainer} from "./MovieTile.style";
import withStyles from "../../../lib/withStyles";

const MovieTile = ({movie,getClickedMovie,className}) => {
  

    return (
      <MovieTileContainer onClick={(event) => getClickedMovie(event, movie.ID)}>
        <img className={className} alt={movie.Title} src={movie.Poster || '/static/images/noImage.jpg'} />{" "}
      </MovieTileContainer>
    );
 
};

MovieTile.defaultProps = {
  movie:{},
};

export default withStyles(MovieTile, styles);
export { MovieTile as MovieTileVanilla };
