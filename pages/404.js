import { Fragment } from "react";
import MetaHead from "../components/headmeta";
import NotFoundBlurb from "../components/blurbs/notfoundblurb";

const Home = (props) => {
  return (
    <Fragment>
      <MetaHead metacontent="Page not Found">404 | Page Not Found</MetaHead>
      <NotFoundBlurb />
    </Fragment>
  );
};

export default Home;
