// @flow
import get from "lodash/get";
import enhance from "../../../lib/dynamicStore";
import initialActions, { getMovie } from "./ArticleWrap.actions";

import saga from "./ArticleWrap.saga";
import reducer from "./ArticleWrap.reducer";

import ArticleWrap from "../../../components/molecules/ArticleWrap";

const mapStateToProps = (state) => ({
  CinemaWorldData: get(state, ["homePage", "layout", "editorialData"]),
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (identifier) => {
      console.log("TCL: identifier", identifier);
      dispatch(getMovie(identifier));
    },
  };
};

export default enhance(ArticleWrap, {
  mapStateToProps,
  mapDispatchToProps,
  saga,
  reducer,
  key: "movieDetail",
  initialActions,
});
