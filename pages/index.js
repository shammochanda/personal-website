import { Fragment } from "react";
import MetaHead from "../components/headmeta";
import MainBlurb from "../components/blurbs/mainblurb";

const Home = (props) => {
  return (
    <Fragment>
      <MetaHead metacontent="Shammo's Portfolio">Shammo Chanda</MetaHead>
      <MainBlurb />
    </Fragment>
  );
};

export default Home;
