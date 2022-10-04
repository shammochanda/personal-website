import { Fragment } from "react";
import Head from "next/head";
import ProjectBlurb from "../components/blurbs/projectblurb";

const Home = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Shammo Chanda</title>
        <meta name="description" content="Shammo's Portfolio" />
      </Head>
      <ProjectBlurb />
    </Fragment>
  );
};

export default Home;