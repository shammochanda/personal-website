import { Fragment } from "react";
import MetaHead from "../components/headmeta";
import AboutBlurb from "../components/blurbs/aboutblurb";

const Home = (props) => {
  return (
    <Fragment>
      <MetaHead metacontent="About Shammo">About | Shammo</MetaHead>
      <AboutBlurb />
    </Fragment>
  );
};

export default Home;
