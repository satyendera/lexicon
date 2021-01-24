import get from "lodash/get";
import enhance from "../../../lib/dynamicStore";
import initialActions from "./Experience.actions";

import saga from "./Experience.saga";
import reducer from "./Experience.reducer";

import Experience from "../../../components/organisms/Experience";

const mapStateToProps = (state) => ({
  moviesData: get(state, ["global", "movieReducer"]),
});

const mapDispatchToProps = (dispatch) => {};

export default enhance(Experience, {
  mapStateToProps,
  mapDispatchToProps,
  saga,
  reducer,
  key: "experience",
  initialActions,
});
