import { Fragment } from "react";
import MetaHead from "../components/headmeta";
import ProjectBlurb from "../components/blurbs/projectblurb";

const Home = (props) => {
  return (
    <Fragment>
      <MetaHead metacontent="Shammo's Projects">Projects | Shammo</MetaHead>
      <ProjectBlurb />
    </Fragment>
  );
};

export default Home;
