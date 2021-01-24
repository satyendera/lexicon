import React from "react";
import { shallow } from "enzyme";

import ArticleWrap from "../ArticleWrap";

const CinemaWorldData = {
  Providers: "Test Title",
  Movies: {},
};

describe("HomePage component", () => {
  test("should render correctly", () => {
    const ArticleWrapComponent = shallow(
      <ArticleWrap CinemaWorldData={CinemaWorldData} />
    );
    expect(ArticleWrapComponent).toMatchSnapshot();
  });
});
