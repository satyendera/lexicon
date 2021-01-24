/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from "react";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import Layout from "../../templates/Layout";
import TopBanner from "../../molecules/TopBanner";
import MovieTile from "../../atoms/MovieTile";
import { MainContainer } from "../../molecules/ArticleWrap/ArticleWrap.style";

const Experience = ({ identifier = "home", moviesData }) => {
  const router = useRouter();

  const goBack = (event) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <Layout title="error" className="row" id="content-wrapper" tabindex="-1">
      <TopBanner title="PRINCE'S THEATRE" subTitle="Cinema World" />
      <MainContainer>
        <Button
          variant="contained"
          color="primary"
          component="span"
          onClick={(event) => goBack(event)}
        >
          Back
        </Button>
        <MovieTile movie={moviesData?.MovieData} />
      </MainContainer>
    </Layout>
  );
};

Experience.defaultProps = {
  identifier: null,
  getExperience: () => false,
  removeExperience: () => false,
  components: null,
};

export default Experience;
